const music = new Audio('s1.mp3');
const songs=[
    {
        id: 1,
        songName: `On my Way <br> <div class="subtitle">Alan Walkar</div>`,
        poster: "images/song1.jpeg"
    },
    {
        id: 2,
        songName: `Wolves <br> <div class="subtitle">Selena Gomez</div>`,
        poster: "images/song2.jpg"
    },
    {
        id: 3,
        songName: `So far away <br> <div class="subtitle">Martin Garrix</div>`,
        poster: "images/song3.jpg"
    },
    {
        id: 4,
        songName: `Just you and I <br> <div class="subtitle">Tom Walker</div>`,
        poster: "images/song4.jpg"
    },
    {
        id: 5,
        songName: `A Thousand Years<br> <div class="subtitle">Christaina Peri</div>`,
        poster: "images/song5.jpg"
    },
    {
        id: 6,
        songName: `Dusk till dawn <br> <div class="subtitle">Zyan, Sia</div>`,
        poster: "images/song6.jpg"
    },
    {
        id: 7,
        songName: `Calm Down <br> <div class="subtitle">Selena Gomez</div>`,
        poster: "images/song7.jpg"
    },
    {
        id: 8,
        songName: `Baila Comingo <br> <div class="subtitle">Selena Gomez</div>`,
        poster: "images/song8.jpg"
    },
    {
        id: 9,
        songName: `Good for you <br> <div class="subtitle">Selena Gomez</div>`,
        poster: "images/song9.jpg"
    },
    {
        id: 10,
        songName: `Past life <br> <div class="subtitle">Selena Gomez</div>`,
        poster: "images/song10.jpg"
    },
    {
        id: 11,
        songName: `Hands to Myself <br> <div class="subtitle">Selena Gomez</div>`,
        poster: "images/song11.jpg"
    },
    {
        id: 12,
        songName: `Same old love<br> <div class="subtitle">Selena Gomez</div>`,
        poster: "images/art1.jpeg"
    },
    {
        id: 13,
        songName: `Stay <br> <div class="subtitle">Justin bieber, kid Laori</div>`,
        poster: "images/song13.jpg"
    },
    {
        id: 14,
        songName: `Arcade <br> <div class="subtitle">Duncan Lawrence</div>`,
        poster: "images/song14.jpg"
    },
    {
        id: 15,
        songName: `Senorita <br> <div class="subtitle">Shawn Mendes, Camila cabello</div>`,
        poster: "images/song15.jpg"
    },
    {
        id: 16,
        songName: `Bad Habits <br> <div class="subtitle">Ed Sheeran</div>`,
        poster: "images/song16.jpg"
    },
    {
        id: 17,
        songName: `Shayad <br> <div class="subtitle">Arijit Singh</div>`,
        poster: "images/song17.jpg"
    },
    {
        id: 18,
        songName: `Ishq wala love <br> <div class="subtitle">Vishal Shekhar</div>`,
        poster: "images/song18.jpg"
    },
    {
        id: 19,
        songName: `Tujh mei rab dikhta hai <br> <div class="subtitle">Salim Sulaiman</div>`,
        poster: "images/song20.jpg"
    },
    {
        id: 20,
        songName: `Taki Taki <br> <div class="subtitle">Cardi B, Selena, DJ Snake</div>`,
        poster: "images/song12.jpg"
    }
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

});


let masterPlay= document.getElementById('masterPlay');
masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bx', 'bx-play');
        masterPlay.classList.add('bx', 'bx-pause');
        let ind=document.getElementById(`${index}`);
        ind.classList.remove('bx', 'bx-play-circle');
        ind.classList.add('bx', 'bx-pause-circle');

    } else {
        music.pause();
        wave.classList.remove('active1');
        
        masterPlay.classList.remove('bx', 'bx-pause');
        masterPlay.classList.add('bx', 'bx-play');
        let ind=document.getElementById(`${index}`);
        ind.classList.remove('bx', 'bx-pause-circle');
        ind.classList.add('bx', 'bx-play-circle');
    }
});



let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
let art_left=document.getElementById('art_left');
let art_right=document.getElementById('art_right');
let item=document.getElementsByClassName('item');
art_left.addEventListener('click', ()=>{
    item.scrollLeft -=100;
})
art_right.addEventListener('click', ()=>{
    item.scrollLeft +=100;
})


const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background= 'rgb(105,105,105,.0)';
    })
}
let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
     index=el.target.id;
        music.src=`s${index}.mp3`;
        if(index==1)
        poster_master_play.src = `images/song${index}.jpeg` ;
        else
        poster_master_play.src = `images/song${index}.jpg` ;

        music.play();
        // masterPlay.classList.remove('bx bx-play');
        masterPlay.classList.remove('bx', 'bx-play');
        masterPlay.classList.add('bx', 'bx-pause');
        // masterPlay.classList.add('bx bx-pause');
        let ind=document.getElementById(`${index}`);
        ind.classList.remove('bx', 'bx-play-circle');
        ind.classList.add('bx', 'bx-pause-circle');
        
        download_music.href = `s${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });
        songTitles.forEach(elss=>{
            let { songName }=elss;
            title.innerHTML=songName;
             download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
        wave.classList.add('active1');
    });
});


let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    // console.log(music_curr);
    let music_dur= music.duration; //console.log(music_dur);
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60); 
    // console.log(min2, sec2);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressbar= parseInt((music_curr/music_dur)*100);
    seek.value=progressbar;
    // console.log(seek.value);

    let seekbar=seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime=seek.value * music.duration /100;  
});

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');
vol.addEventListener('change', ()=>{
   let vol_a = vol.value;
   //console.log(vol_a);
    vol_bar.style.width = `${vol_a}%`;
   vol_dot.style.left=`${vol_a}%`;
   music.volume=vol_a/100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click', ()=>{
    
    index-=1;
    if(index<1)
    {
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`s${index}.mp3`;
        if(index==1)
        poster_master_play.src = `images/song${index}.jpeg` ;
        else
        poster_master_play.src = `images/song${index}.jpg` ;

        music.play();
        masterPlay.classList.remove('bx', 'bx-play');
        masterPlay.classList.add('bx', 'bx-pause');
        let ind=document.getElementById(`${index}`);
        ind.classList.remove('bx', 'bx-play-circle');
        ind.classList.add('bx', 'bx-pause-circle');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });
        songTitles.forEach(elss=>{
            let { songName }=elss;
            title.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
        wave.classList.add('active1');
});

next.addEventListener('click', ()=>{
    
    index+=1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length )
    {
        index=1;
    }
    music.src=`s${index}.mp3`;
        if(index==1)
        poster_master_play.src = `images/song${index}.jpeg` ;
        else
        poster_master_play.src = `images/song${index}.jpg` ;

        music.play();
        masterPlay.classList.remove('bx', 'bx-play');
        masterPlay.classList.add('bx', 'bx-pause');
        let ind=document.getElementById(`${index}`);
        ind.classList.remove('bx', 'bx-play-circle');
        ind.classList.add('bx', 'bx-pause-circle');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });
        songTitles.forEach(elss=>{
            let { songName }=elss;
            title.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";
        wave.classList.add('active1');
});



