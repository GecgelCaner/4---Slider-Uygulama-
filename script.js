var models =[
    {
        name : 'Klasik Araba1',
        image : 'img/1.jpg',
        link : 'https://www.google.com/search?q=araba%20fotolar%C4%B1%20b%C3%BCy%C3%BCk%20%C3%A7%C3%B6z%C3%BCn%C3%BCrl%C3%BCk&tbm=isch&hl=tr&tbs=rimg:CXXSLBpiU87iYfrkM0q4XI3JsgIGCgIIABAA&sa=X&ved=0CBsQuIIBahcKEwiYi5vD47_0AhUAAAAAHQAAAAAQFw&biw=1066&bih=984#imgrc=qFS77JrZm_0TnM&imgdii=DVzINxaDLnT8nM'
    },
    {
        name : 'Klasik Araba2',
        image : 'img/2.jpg',
        link : 'https://www.google.com/search?q=araba%20fotolar%C4%B1%20b%C3%BCy%C3%BCk%20%C3%A7%C3%B6z%C3%BCn%C3%BCrl%C3%BCk&tbm=isch&hl=tr&tbs=rimg:CXXSLBpiU87iYfrkM0q4XI3JsgIGCgIIABAA&sa=X&ved=0CBsQuIIBahcKEwiYi5vD47_0AhUAAAAAHQAAAAAQFw&biw=1066&bih=984#imgrc=qFS77JrZm_0TnM&imgdii=DVzINxaDLnT8nM'
    },
    {
        name : 'Klasik Araba3',
        image : 'img/3.jpg',
        link : 'https://www.google.com/search?q=araba%20fotolar%C4%B1%20b%C3%BCy%C3%BCk%20%C3%A7%C3%B6z%C3%BCn%C3%BCrl%C3%BCk&tbm=isch&hl=tr&tbs=rimg:CXXSLBpiU87iYfrkM0q4XI3JsgIGCgIIABAA&sa=X&ved=0CBsQuIIBahcKEwiYi5vD47_0AhUAAAAAHQAAAAAQFw&biw=1066&bih=984#imgrc=qFS77JrZm_0TnM&imgdii=DVzINxaDLnT8nM'
    },
    {
        name : 'Klasik Araba4',
        image : 'img/4.jpg',
        link : 'https://www.google.com/search?q=araba%20fotolar%C4%B1%20b%C3%BCy%C3%BCk%20%C3%A7%C3%B6z%C3%BCn%C3%BCrl%C3%BCk&tbm=isch&hl=tr&tbs=rimg:CXXSLBpiU87iYfrkM0q4XI3JsgIGCgIIABAA&sa=X&ved=0CBsQuIIBahcKEwiYi5vD47_0AhUAAAAAHQAAAAAQFw&biw=1066&bih=984#imgrc=qFS77JrZm_0TnM&imgdii=DVzINxaDLnT8nM'

    },
    {
        name : 'Klasik Araba5',
        image : 'img/5.jpg',
        link : 'https://www.google.com/search?q=araba%20fotolar%C4%B1%20b%C3%BCy%C3%BCk%20%C3%A7%C3%B6z%C3%BCn%C3%BCrl%C3%BCk&tbm=isch&hl=tr&tbs=rimg:CXXSLBpiU87iYfrkM0q4XI3JsgIGCgIIABAA&sa=X&ved=0CBsQuIIBahcKEwiYi5vD47_0AhUAAAAAHQAAAAAQFw&biw=1066&bih=984#imgrc=qFS77JrZm_0TnM&imgdii=DVzINxaDLnT8nM'
    },
    {
        name : 'Klasik Araba6',
        image : 'img/6.jpg',
        link : 'https://www.google.com/search?q=araba%20fotolar%C4%B1%20b%C3%BCy%C3%BCk%20%C3%A7%C3%B6z%C3%BCn%C3%BCrl%C3%BCk&tbm=isch&hl=tr&tbs=rimg:CXXSLBpiU87iYfrkM0q4XI3JsgIGCgIIABAA&sa=X&ved=0CBsQuIIBahcKEwiYi5vD47_0AhUAAAAAHQAAAAAQFw&biw=1066&bih=984#imgrc=qFS77JrZm_0TnM&imgdii=DVzINxaDLnT8nM'
    },
];


var index = 0;
var slaytCount = models.length;
var interval;

var settings ={
    duration :'2000',
    random : false
}

init(settings);

document.querySelector('.fa-angle-double-left ').addEventListener('click',function(){

    index--;
    showSlide(index);
    console.log(index);

});

document.querySelector('.fa-angle-double-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);

});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });
});


function init(settings){

    var prev;

    interval = setInterval(function(){
        
       

        if(settings.random){
            // random index

            do{
                index = Math.floor(Math.random() * slaytCount);

            }while(index == prev)
            prev = index;
            
        }else{
            // artan index 
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;


        }
        
        showSlide(index);



    },settings.duration)

}




function showSlide(i){

    index = i;

    if(i<0){
        index = slaytCount - 1 ;

    }
    if(i >= slaytCount){
        index =0;
    }



    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
    
    
}











