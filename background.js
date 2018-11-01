
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
/*
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null,{file:"accountHoverAddon.js"});
});
*/
/*
chrome.tabs.onActivated.addListener(function(activeInfo){
  tabId = activeInfo.tabId

  chrome.tabs.sendMessage(tabId, {text: "are_you_there_accountHoverAddon_script?"}, function(msg) {
    msg = msg || {};
    if (msg.status != 'yes') {
      //chrome.tabs.insertCSS(tabId, {file: "css/mystyle.css"});
      chrome.tabs.executeScript(tabId, {file: "accountHoverAddon.js"});
      console.log("No");
    } else {
      console.log("Yes");
    }
  });
});
*/

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab)
{
  if (changeInfo.status == 'complete')
  {
    var scripts = [
      'accountHoverAddon.js'
    ];
    scripts.forEach(function(script)
    {
      chrome.tabs.executeScript(tabId, { file: script }, function(resp)
      {
        if (script!=='accountHoverAddon.js') return;
      });
    });
  }
})
