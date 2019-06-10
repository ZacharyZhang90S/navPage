import './style.scss'
import { stringify } from 'querystring';

var keys = {
     0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
     1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
     2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
     length: 3
}

var hashReload = JSON.parse(localStorage.getItem('z'))
console.log(hashReload)
var hash = hashReload || {
     'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com',
     'y': 'youtube.com', 'u': 'uc.com', 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined,
     'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonlads.com.cn'
}

var index = 0
var row = null
var div = null
var main = document.getElementById('root')

while (index < keys.length) {
     row = keys[index]
     div = document.createElement('div')
     main.appendChild(div)
     var kbd = null
     var index2 = 0
     var btn = null
     while (index2 < row.length) {
          kbd = document.createElement('kbd')
          kbd.textContent = row[index2]

          btn = document.createElement('button')
          btn.textContent = '编辑'
          btn.id = row[index2]
          div.appendChild(kbd)
          kbd.appendChild(btn)
          btn.onclick = function (x) {
               var key = x.target.id
               console.log(hash[key])
               var y = prompt('给我一个网址')
               if (y) {
                    hash[key] = y
               }
               var hashStore = JSON.stringify(hash)
               localStorage.setItem('z', hashStore)
          }
          index2 += 1
     }
     index += 1
}
document.onkeypress = function (x) {
     var y = x.key
     console.log(x)
     var website = hash[y.toLowerCase()]
     // location.href = 'http://' + website
     window.open('http://' + website, '_blank')
}



