
chrome.browserAction.onClicked.addListener(function(activeTab)
{
  var bkg = chrome.extension.getBackgroundPage();
  bkg.console.log('Icon clicked');
  //Executes the scripts to interact with DOM, since this file cannot.
  var scripts = [
    'expandHtml.js'
  ];
  scripts.forEach(function(script)
  {
    chrome.tabs.executeScript(null, { file: script }, function(resp)
    {
      if (script!=='expandHtml.js') return;
      // Your callback code here
    });
  });

});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab)
{
  if (changeInfo.status == 'loading')
  {
    var scripts = [
      'accountHoverAddon.js'
    ];
    scripts.forEach(function(script)
    {
      chrome.tabs.executeScript(null, { file: script }, function(resp)
      {
        if (script!=='accountHoverAddon.js') return;
      });
    });
  }
})