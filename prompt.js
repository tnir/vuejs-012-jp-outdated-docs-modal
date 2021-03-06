(function () { 
  var wrapper = document.createElement('div')
  var closeButton = document.createElement('button')
  
  var anchorStyles = 'color: #42b983;font-weight: 600;text-decoration: none;'
  var buttonStyles = 'appearance: none;background: none;-webkit-appearance: none;border: none;position: absolute;right: 10px;top: 10px;line-height: 10px;color: #2c3e50;font-size: 24px;padding: 5px;'
  wrapper.setAttribute('style', 
  	'font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;font-size: 24px;color: #2c3e50;position: fixed;bottom: 30px;right: 30px;padding: 20px 40px 20px 20px;max-width: 350px;background: #fdfcef;border-radius: 5px;z-index: 100;box-shadow: 0 3px 15px rgba(0,0,0,0.2)')
  wrapper.innerHTML = 'このサイトはVueの非常に古いバージョンのドキュメントです。<br>最新の日本語Vue.jsドキュメントをお探しの方は<a href="https://jp.vuejs.org/v2/guide/" target="_blank" style="'+anchorStyles+'">こちらを参照</a>してください。'
  
  closeButton.setAttribute('type', 'button')
  closeButton.setAttribute('style', buttonStyles)
  closeButton.innerHTML = "&times;"
  closeButton.onclick = function (event) {
    wrapper.remove()
  }
  wrapper.insertBefore(closeButton, null)
  document.body.insertBefore(wrapper, null)
})()
