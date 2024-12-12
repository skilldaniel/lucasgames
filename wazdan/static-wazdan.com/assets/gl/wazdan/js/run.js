let initializing = false;

function isUri(str) {
  if (typeof str !== 'string') {
    return false;
  }

  return /^[a-z]{2,}:\/\/.+/i.test(str);
}

function call(name) {
  if (typeof window[name] === 'undefined') {
    return false;
  }

  window[name]();

  return true;
}

const format = (raw) => {
  if (raw > 9) {
    return raw;
  }

  return `0${raw}`;
};

const gameLog = (action, props = {}) => {
  if (initializing) {
    return Promise.resolve('initializing');
  }

  const date = new Date();

  return fetch(gameLogsHost, {
    method: 'POST',
    body: JSON.stringify({
      action,
      args: {
        source: 'gamelauncher',
        url: window.location.href,
        data: {
          date: `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(
            date.getDate(),
          )} ${format(date.getHours())}:${format(date.getMinutes())}:${format(
            date.getSeconds(),
          )}.${date.getMilliseconds()}`,
          utcDate: `${date.getUTCFullYear()}-${format(
            date.getUTCMonth() + 1,
          )}-${format(date.getUTCDate())} ${format(
            date.getUTCHours(),
          )}:${format(date.getUTCMinutes())}:${format(
            date.getUTCSeconds(),
          )}.${date.getUTCMilliseconds()}`,
        },
        ...props,
      },
    }),
  });
};

const logTime = parseInt(gameLogsTime);
if (!!logTime && !!gameLogsHost) {
  setTimeout(() => gameLog('timeout', { timeout: logTime }), logTime * 1000);
}

window.addEventListener('message', ({ data }) => {
  if (data.method === 'WGEAPI.status.initializing') {
    initializing = true;
  }

  if (data.action === 'close') {
    call('EXTERNAL_notifyClose');
  }
});

window.onunload = () => gameLog('abort');

function send(action) {
  window.parent.postMessage({ action }, '*');
}

function getLayout() {
  if (!isMobile && !isTablet) {
    return '';
  }

  if (window.matchMedia('(orientation: portrait)').matches) {
    return '_vertical';
  }

  return '_horizontal';
}

function EXTERNAL_closeWindow(newUrl) {
  const platform = isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';
  const background = document.createElement('div');
  background.id = 'maintenance';
  background.style.background = `url("${assetsBase}/game-close/gameclose_${platform}${getLayout()}.jpg")`;
  document.body.innerHTML = background.outerHTML;

  if (typeof onClose !== 'undefined') {
    send(onClose);
  }

  setTimeout(function () {
    if (typeof closeWindowBody !== 'undefined') {
      eval(closeWindowBody);

      return;
    }

    if (isUri(newUrl)) {
      window.top.location = newUrl;

      return;
    }

    if (isUri(lobby)) {
      window.location = lobby;

      return;
    }

    window.close();
  }, 100);
}

function EXTERNAL_logoutPLayer() {
  if (typeof onLogout !== 'undefined') {
    send(onLogout);
  }
}
