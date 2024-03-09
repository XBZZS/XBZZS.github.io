<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
{% aplayerlist %}
{
    "narrow": false,                          
    "autoplay": false,                         
    "mode": "circulation",                         
    "showlrc": 3,                             
    "mutex": true,                            
    "theme": "#e6d0b2",	                      
    "preload": "metadata",                    
    "listmaxheight": "513px",                 
    "music": [
        {
            "title": "Mine Mine",
            "author": "周杰伦",
            "url": "https://music.aqcoder.cn/song/100.mp3",
            "lrc": "/lrc/100.lrc",
            "pic": "https://music.aqcoder.cn/pic/100.webp"
        },
        {
            "title": "Mojito",
            "author": "周杰伦",
            "url": "https://music.aqcoder.cn/song/101.mp3",
            "lrc": "/lrc/101.lrc",
            "pic": "https://music.aqcoder.cn/pic/101.webp"
        }
    ]
}
{% endaplayerlist %}