let recentHistory;
let progressBarIncrement = 0;
let songDuration;
let songCalculation1;
let songCalculation2;
let clearTimer1, clearTimer2;
let token = 0;
let newToken;
let backTimingHourCalculation;
let backTimingMinCalculation;
let hourToken2;
let timeToken2;
let timeVariable;
let hourDecIndicator;
let bear;
let repeatTime;
let globalMainTimer;
let cancelSetTimeOut;
let timeTargetDetector;
let newCheckImage;
let glow, glow2;
let h = 0;
let r;
let imgfxn, imgfxn2;
let audi6 = new Audio("");
let audi7 = new Audio("");
let playSongDetector = false;
// let progressBarDetector = false;

let lineAnime = document.getElementById("lineAnimation");
let logo = document.getElementById("logo");
let logoImg = document.getElementById("logoImg");
let icons = document.getElementById('icons');
let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");
let firstInnerAlbum = document.getElementById("firstInnerAlbum");
let thirdInnerAlbum = document.getElementById("thirdInnerAlbum");
let firstInnerAlbum2 = document.getElementById("firstInnerAlbum");
let secondInnerAlbum = document.getElementById('secondInnerAlbum');
let secondInnerAlbum2 = document.getElementById('secondInnerAlbum2');
let thirdInnerAlbum2 = document.getElementById("thirdInnerAlbum");
let album = document.getElementById("album");
let album2 = document.getElementById("album2");
let arrow = document.querySelectorAll(".arrow");
let singer = document.getElementById("singer");
let singerAlbum = document.querySelectorAll(".singerAlbum");
let boxContainer2 = document.getElementById("boxContainer2");
let innerDiv1 = document.getElementById("innerDiv1");
let innerDiv2 = document.getElementById("innerDiv2");
let innerDiv3 = document.getElementById("innerDiv3");
let innerDiv4 = document.getElementById("innerDiv4");
let imgContainer = document.getElementById("imgContainer");
let imgContainer2 = document.getElementById("imgContainer2");
let backArrow = document.getElementById("backArrow");
let backArrow2 = document.getElementById("backArrow2");
let fav = document.getElementById("fav");
let fav2 = document.getElementById("fav2");
let heartImg = document.getElementById("heartImg");
let heartImg2 = document.getElementById("heartImg2");
let playAll = document.getElementById('playAll');
let playAll2 = document.getElementById('playAll2');
let songList = document.getElementById("songList");
let songList2 = document.getElementById("songList2");
let recentlyIcon = document.getElementById("recentlyIcon");
let homeIcon = document.getElementById("homeIcon");
let searchIcon = document.getElementById("searchIcon");
let playlistIcon = document.getElementById("playlistIcon");
let see = document.getElementById("see");
let searchBar = document.getElementById("searchBar");
let searchImg = document.getElementById("searchImg");
let searchHeading = document.getElementById("searchHeading");
let searchResult = document.getElementById("searchResult");
let emptyImg = document.getElementById('emptyImg');
let noResultFound = document.getElementById('noResultFound');
let Img100 = document.getElementById('Img100');
let recentHistoryHeading = document.getElementById("recentHistoryHeading");
let recentHistorySongs = document.getElementById('recentHistorySongs');
let searchProgress = document.getElementById('searchProgress');
let innerDiv5 = document.getElementById("innerDiv5");
let imgMusic = document.getElementById("imgMusic");
let downIcon = document.getElementById("downIcon");
let musicName = document.getElementById("musicName");
let singBy = document.getElementById("singBy");
let fav3 = document.getElementById("fav3");
let heartImg3 = document.getElementById("heartImg3");
let songLine = document.getElementById("songLine");
let progressBar = document.getElementById("progressBar");
let circleBar = document.getElementById('circleBar');
let circleBarHidden = document.getElementById('circleBarHidden');
let timeDecrement = document.getElementById('timeDecrement');
let timeIncrement = document.getElementById('timeIncrement');
let firstCounting = document.getElementById('firstCounting');
let secondCounting = document.getElementById('secondCounting');
let firstDecrementCounting = document.getElementById('firstDecrementCounting');
let secondDecrementCounting = document.getElementById('secondDecrementCounting');
let zeroIndicator = document.getElementById('zeroIndicator');
let prevSong = document.getElementById("prevSong");
let playSong = document.getElementById("playSong");
let nextSong = document.getElementById('nextSong');

album2.style.display = "none";
heading2.style.display = "none";
album.style.display = "none";
icons.style.display = "none";
heading1.style.display = "none";
for (let i = 0; i <= 1; i++) {
    arrow[i].style.display = "none";
}
firstInnerAlbum.style.pointerEvents = "none";
thirdInnerAlbum.style.pointerEvents = "none";

document.addEventListener("DOMContentLoaded", () => {
    lineAnime.style.width = "150px";
    lineAnime.style.transition = "width 4000ms";
    setTimeout(() => {
        lineAnime.style.display = "none";
        logo.style.transform = `translate(-120px,-230px)`;
        logo.style.transition = "transform 2000ms";
        logoImg.style.height = "70px";
        logoImg.style.transition = "height 2000ms";
    }, 4000);

    setTimeout(() => {
        icons.style.display = "flex";
        heading1.style.display = "block";
        heading2.style.display = "block";
        album.style.display = "flex";
        album2.style.display = "flex";
        see.style.display = "inline-block";
        for (let i = 0; i <= 1; i++) {
            arrow[i].style.display = "flex";
        }
    }, 6000);
});

let j = 0;
let k;
let nextArrow = document.getElementById('nextArrow');
nextArrow.addEventListener('click', () => {
    if (j < data2.length - 1) {
        document.getElementById('firstInnerAlbum').innerHTML = `<img src=${data2[j].img} height="100px" width="100px">`;
        j++;
        document.getElementById('secondInnerAlbum').innerHTML = `<img src=${data2[j].img} height="100px" width="100px">`;
        singer.innerText = `${data2[j].Name}`;
        k = j + 1;
        if (k > data2.length - 1) {
            document.getElementById('thirdInnerAlbum').innerHTML = ``;
        } else if (k <= data2.length - 1) {
            document.getElementById('thirdInnerAlbum').innerHTML = `<img src=${data2[k].img} height="100px" width="100px">`;
        }

    }
});

let l;
let songArray;
let oldSong = "";
let oldSongHistory;
let audi1;
let audi2 = new Audio("");
let paused = false;
let imgData;
let prevArrow = document.getElementById('prevArrow');
prevArrow.addEventListener('click', () => {
    if (j == 0) {
        document.getElementById('thirdInnerAlbum').innerHTML = `<img src=${data2[1].img} height="100px" width="100px">`;
        document.getElementById('firstInnerAlbum').innerHTML = ``;
        document.getElementById('secondInnerAlbum').innerHTML = `<img src=${data2[0].img} height="100px" width="100px">`;
        singer.innerText = `${data2[0].Name}`;
    } else if (j > 0) {
        document.getElementById('secondInnerAlbum').innerHTML = `<img src=${data2[j].img} height="100px" width="100px">`;
        singer.innerText = `${data2[j].Name}`;
        l = j + 1;
        document.getElementById('thirdInnerAlbum').innerHTML = `<img src=${data2[l].img} height="100px" width="100px">`;
        j--;
        document.getElementById('firstInnerAlbum').innerHTML = `<img src=${data2[j].img} height="100px" width="100px">`;
    }
});

Array.from(singerAlbum).forEach((element) => {
    element.addEventListener('click', async (e) => {
        prevArrow.style.width = "0px";
        prevArrow.style.transition = "width 1000ms";
        prevArrow.style.height = "0px";
        prevArrow.style.transition = "height 1000ms";
        prevArrow.style.background = "transparent";
        prevArrow.style.transition = "background 500ms";
        nextArrow.style.width = "0px";
        nextArrow.style.transition = "width 1000ms";
        nextArrow.style.height = "0px";
        nextArrow.style.transition = "height 1000ms";
        nextArrow.style.background = "transparent";
        nextArrow.style.transition = "background 500ms";
        innerDiv1.style.width = "346px";
        innerDiv1.style.transition = "width 250ms";
        innerDiv2.style.width = "0px";
        innerDiv2.style.transition = "width 250ms";
        innerDiv4.style.height = "0px";
        innerDiv4.style.transition = "height 300ms";

        setTimeout(() => {
            imgContainer.style.display = "inline-block";
            backArrow.style.display = "inline-block";
            fav.style.display = "inline-block";
            playAll.style.display = "inline-block";
            songList.style.display = "inline-block";
            imgContainer2.style.display = "none";
            backArrow2.style.display = "none";
            fav2.style.display = "none";
            playAll2.style.display = "none";
            songList2.style.display = "none";
        }, 150)

        imgContainer.innerHTML = `<img src="${data2[j].img}" width="140px" height="140px">`;
        function check(data3) {
            return data3.singerName == singer.innerText;

        }
        let result = data3.filter(check);
        songList.innerHTML = "";
        for (let x = 0; x <= result.length; x++) {
            songList.innerHTML += `<img src="${result[x].image}" height="40px" width="40px"> <div class="songs">${result[x].songName}</div><br>`;
            let audioFxn = await setTimeout(() => {
                songArray = document.getElementsByClassName('songs');
                // console.log(songArray);


                Array.from(songArray).forEach(elem => {
                    elem.addEventListener('click', (e) => {
                        clearTimeout(clearTimer1);
                        e.preventDefault();
                        token = newToken;
                        token++;
                        if (progressBar.clientWidth <= 250) {
                            setTimeout(() => {
                                // progressBar.style.width = "250px";
                                progressBarIncrement = 0;
                                progressBar.style.width = "0px";
                                // timeToken="00";
                                // firstCounting = timeToken;
                                // hourToken="00";
                                // secondCounting = hourToken;
                                // timeInc();
                            })
                        }

                        logo.style.display = "none";
                        setTimeout(() => {
                            downIcon.style.display = "inline-block";
                            imgMusic.style.display = "inline-block";
                            musicName.style.display = "inline-block";
                            singBy.style.display = "inline-block";
                            fav3.style.display = "inline-block";
                            heartImg3.style.display = "inline-block";
                            songLine.style.display = "inline-block";
                            progressBar.style.display = "inline-block";
                            timeIncrement.style.display = "inline-block";
                            timeDecrement.style.display = "inline-block";
                            prevSong.style.display = "flex";
                            playSong.style.display = "flex";
                            nextSong.style.display = "flex";
                        }, 300);
                        innerDiv5.style.height = "597px";
                        innerDiv5.style.transition = "height 1000ms";
                        function checkImage(data3) {
                            return data3.songName == e.target.innerText;
                        }
                        imgData = data3.filter(checkImage);
                        imgMusic.innerHTML = `<img src="${imgData[0].image}" height="250px" width="250px">`;
                        musicName.innerText = `${imgData[0].songName}`;
                        singBy.innerText = `${imgData[0].singerName}`;

                        async function musicTime() {
                            audi2.pause();
                            audi6.pause();
                            audi7.pause();
                            if (e.target) {
                                audi2 = new Audio(`${e.target.innerText}`);
                                audi2.play();
                            }
                            await setTimeout(() => {
                                songDuration = audi2.duration;
                                backTimingHourCalculation = parseInt(songDuration / 60);
                                backTimingMinCalculation = parseInt((songDuration % 60) - 2);
                                firstDecrementCounting.innerText = backTimingHourCalculation;
                                timeVariable = backTimingMinCalculation;
                                hourDecIndicator = backTimingHourCalculation;
                                let hourChanger = hourDecIndicator;
                                let timeChanger = timeVariable;
                                function a() {
                                    if (progressBar.clientWidth <= 250) {
                                        if (timeChanger <= 10 && timeChanger > 1) {
                                            secondDecrementCounting.innerText = timeChanger;
                                            zeroIndicator.innerText = "0";
                                            secondDecrementCounting.innerText--;

                                        } else if (timeChanger > 10 && timeChanger <= 60) {
                                            secondDecrementCounting.innerText = timeChanger;
                                            zeroIndicator.innerText = "";
                                            secondDecrementCounting.innerText--;

                                        } else if (timeChanger == 1) {
                                            timeChanger = 60;
                                            secondDecrementCounting.innerText = "00";
                                            zeroIndicator.innerText = "";

                                        }
                                        b();
                                    } else if (progressBar.clientWidth == 250) {
                                        secondDecrementCounting.innerText = secondDecrementCounting.innerText - 1;
                                        firstDecrementCounting.innerText;
                                    }
                                }
                                setTimeout(a);

                                function b() {
                                    if (hourChanger < 10) {
                                        firstDecrementCounting.innerText = `0${hourChanger}`;
                                    } else if (hourChanger >= 10) {
                                        firstDecrementCounting.innerText = hourChanger;
                                    }
                                    if (secondDecrementCounting.innerText != "00") {
                                        timeChanger = secondDecrementCounting.innerText;
                                        setTimeout(a, 1000);
                                    } else if (secondDecrementCounting.innerText == "00") {
                                        if (hourChanger > 0 && hourChanger < 10) {
                                            setTimeout(() => {
                                                hourChanger--;
                                                firstDecrementCounting.innerText = `0${hourChanger}`;
                                            }, 1000)
                                            setTimeout(a, 1000);
                                        } else if (hourChanger >= 10) {
                                            hourChanger--;
                                            firstDecrementCounting.innerText = hourChanger;
                                            setTimeout(a, 1000);
                                        }
                                    }
                                }
                            }, 1000);

                            function mainTimer() {
                                function MusicTimer() {
                                    if (progressBar.clientWidth <= 250) {
                                        // console.log(progressBarIncrement)
                                        progressBarIncrement = progressBarIncrement + (250 / songDuration);
                                        bear = progressBarIncrement / 9.85;
                                        progressBar.style.width = `${bear}px`;
                                        MusicTimerLoop();

                                    } else if (progressBar.clientWidth > 250) {
                                        progressBarIncrement = 0;
                                        clearTimeout(clearTimer1);
                                    }
                                }

                                MusicTimer();

                                function MusicTimerLoop() {
                                    clearTimer1 = setTimeout(MusicTimer, 1000);
                                }
                            }

                            await setTimeout(mainTimer, 1000);
                        };

                        musicTime();
                        let timeToken = "00";
                        let hourToken = "00";
                        timeTargetDetector = false;
                        function timeInc() {
                            if (progressBar.clientWidth < 249) {
                                if (timeTargetDetector == false) {
                                    // timeToken++;
                                    if (timeToken == "00") {
                                        timeToken++;
                                        secondCounting.innerText = `0${timeToken}`;
                                    } else if (timeToken < 10 && timeToken >= 1) {
                                        timeToken++;
                                        if (timeToken == 10) {
                                            secondCounting.innerText = `${timeToken}`;
                                        } else {
                                            secondCounting.innerText = `0${timeToken}`;
                                        }
                                    } else if (timeToken >= 10 && timeToken < 59) {
                                        timeToken++;
                                        secondCounting.innerText = timeToken;
                                    } else if (timeToken >= 59) {
                                        hourToken++;
                                        timeToken = "00";
                                        secondCounting.innerText = timeToken;
                                    }

                                    if (hourToken == "00") {
                                        firstCounting.innerText = `${hourToken}`;
                                    } else if (hourToken < 10 && hourToken >= 1) {
                                        firstCounting.innerText = `0${hourToken}`;
                                    } else if (hourToken >= 10 && hourToken <= 59) {
                                        firstCounting.innerText = hourToken;
                                    }
                                } else if (timeTargetDetector == true) {
                                    setTimeout(() => {
                                        let globalTimeChanger1 = (250 / songDuration);
                                        let globalTimeChanger2 = Math.round(bear / globalTimeChanger1);
                                        let exactTimeChanger1 = parseInt(globalTimeChanger2 / 60);

                                        let exactTimeChanger2 = (globalTimeChanger2 % 60);
                                        hourToken = exactTimeChanger1;
                                        timeToken = exactTimeChanger2;

                                        if (timeToken < 10) {
                                            secondCounting.innerText = `0${timeToken}`;
                                            timeToken++;
                                        } else if (timeToken >= 10 && timeToken <= 59) {
                                            secondCounting.innerText = timeToken;
                                            timeToken++;
                                        } else if (timeToken > 59) {
                                            timeToken = "00";
                                            timeToken++;
                                            hourToken++;
                                        }

                                        if (hourToken < 10) {
                                            firstCounting.innerText = `0${hourToken}`;
                                        } else if (hourToken >= 10 && hourToken <= 59) {
                                            firstCounting.innerText = hourToken;
                                        }

                                        console.log(timeToken);
                                        audi2.currentTime = (hourToken * 60) + timeToken;
                                        MusicTimerLoop();
                                    });
                                }

                            } else if (progressBar.clientWidth >= 249) {
                                timeToken;
                                hourToken;
                                clearTimeout(timeInc);
                            }
                            repeatTime();
                        }
                        cancelSetTimeOut = setTimeout(timeInc, 1000);

                        function repeatTime() {
                            setTimeout(timeInc, 1000);
                        };
                    });
                });
            });
        }
    });
});


backArrow.addEventListener("click", () => {
    innerDiv1.style.width = "0px";
    innerDiv1.style.transition = "width 300ms";
    innerDiv2.style.width = "0px";
    innerDiv2.style.transition = "width 300ms";
    innerDiv4.style.height = "0px";
    innerDiv4.style.transition = "height 300ms";
    nextArrow.style.display = "inline-block";
    prevArrow.style.display = "inline-block";
    prevArrow.style.marginLeft = "-18px";
    fav.style.display = "none";
    playAll.style.display = "none";
    fav2.style.display = "none";
    playAll2.style.display = "none";
    see.style.display = "inline-block";
    searchHeading.style.display = "none";
    innerDiv3.style.display = "none";
    searchResult.style.display = "none";
    recentHistorySongs.style.display = "none";
    recentHistoryHeading.style.display = "none";
    searchProgress.style.display = "none";
    setTimeout(() => {
        imgContainer.style.display = "none";
        backArrow.style.display = "none";
        songList.style.display = "none";
        imgContainer2.style.display = "none";
        backArrow2.style.display = "none";
        songList2.style.display = "none";
    }, 50)
});

var recommendInterval1 = setInterval(() => {
    nextArrow.click();
}, 6000);

var recommendInterval2 = setInterval(() => {
    j = 0;
    nextArrow.click();
}, 72000);

heartImg.addEventListener("click", () => {
    if (heartImg.style.background == "") {
        heartImg.style.background = "red";
    } else if (heartImg.style.background == "red") {
        heartImg.style.background = "";
    }
});

heartImg3.addEventListener("click", () => {
    if (heartImg3.style.background == "") {
        heartImg3.style.background = "red";
    } else if (heartImg3.style.background == "red") {
        heartImg3.style.background = "";
    }
});

/* Favourite MusicList And All Played Songs - Recently Album */

let store;
let m = 0;
recentlyIcon.addEventListener("click", async () => {
    prevArrow.style.width = "0px";
    prevArrow.style.transition = "width 1000ms";
    prevArrow.style.height = "0px";
    prevArrow.style.transition = "height 1000ms";
    prevArrow.style.background = "transparent";
    prevArrow.style.transition = "background 500ms";
    nextArrow.style.width = "0px";
    nextArrow.style.transition = "width 1000ms";
    nextArrow.style.height = "0px";
    nextArrow.style.transition = "height 1000ms";
    nextArrow.style.background = "transparent";
    nextArrow.style.transition = "background 500ms";
    innerDiv2.style.width = "346px";
    innerDiv2.style.transition = "width 250ms";
    innerDiv1.style.width = "0px";
    innerDiv4.style.height = "0px";
    innerDiv4.style.transition = "height 300ms";
    innerDiv1.style.transition = "width 250ms";
    searchHeading.style.display = "none";
    innerDiv3.style.display = "none";
    searchResult.style.display = "none";
    recentHistorySongs.style.display = "none";
    recentHistoryHeading.style.display = "none";
    searchProgress.style.display = "none";

    // innerDiv5 none
            innerDiv5.style.transform = `translateY(490px)`;
            innerDiv5.style.height = "55px";
            innerDiv5.style.borderRadius = "3px";
            imgMusic.style.display = "inline-Block";
            imgMusic.style.marginTop = "2.5px";
            imgMusic.style.marginLeft = "5px";
            imgMusic.innerHTML = `<img src="${imgData[0].image}" height="50px" width="50px">`;
            musicName.style.display = "inline-Block";
            musicName.style.marginTop = "2.5px";
            musicName.style.marginLeft = "65px";
            singBy.style.display = "inline-Block";
            singBy.style.marginTop = "25px";
            singBy.style.marginLeft = "65px";
            songLine.style.display = "inline-Block";
            songLine.style.marginTop = "50px";
            songLine.style.height = "3px";
            songLine.style.marginLeft = "65px";
            progressBar.style.display = "inline-Block";
            progressBar.style.height = "2px";
            progressBar.style.marginTop = "0.2px";
            circleBar.style.display = "none";
            songList.style.height = "270px";

    setTimeout(() => {
        imgContainer2.style.display = "inline-block";
        backArrow2.style.display = "inline-block";
        fav2.style.display = "inline-block";
        playAll2.style.display = "inline-block";
        songList2.style.display = "inline-block";
        imgContainer.style.display = "none";
        backArrow.style.display = "none";
        fav.style.display = "none";
        playAll.style.display = "none";
        songList.style.display = "none";
        see.style.display = "none";
    }, 150)


});

backArrow2.addEventListener("click", () => {
    innerDiv2.style.width = "0px";
    innerDiv2.style.transition = "width 300ms";
    innerDiv1.style.width = "0px";
    innerDiv1.style.transition = "width 300ms";
    innerDiv4.style.height = "0px";
    innerDiv4.style.transition = "height 300ms";
    nextArrow.style.display = "inline-block";
    prevArrow.style.display = "inline-block";
    see.style.display = "inline-block";
    prevArrow.style.marginLeft = "-18px";
    fav2.style.display = "none";
    playAll2.style.display = "none";
    fav.style.display = "none";
    playAll.style.display = "none";
    searchHeading.style.display = "none";
    innerDiv3.style.display = "none";
    searchResult.style.display = "none";
    recentHistorySongs.style.display = "none";
    recentHistoryHeading.style.display = "none";
    searchProgress.style.display = "none";
    setTimeout(() => {
        imgContainer2.style.display = "none";
        backArrow2.style.display = "none";
        songList2.style.display = "none";
        imgContainer.style.display = "none";
        backArrow.style.display = "none";
        songList.style.display = "none";
    }, 50)
});

heartImg2.addEventListener("click", () => {
    if (heartImg2.style.background == "") {
        heartImg2.style.background = "red";
    } else if (heartImg2.style.background == "red") {
        heartImg2.style.background = "";
    }
});

// HomeIcon addEventListener

homeIcon.addEventListener("click", () => {
    if (innerDiv2.clientWidth == 346 && innerDiv1.clientWidth == 0 && innerDiv4.clientHeight == 0) {

        backArrow2.click();
        logo.style.display = "inline-block";
    } else if (innerDiv2.clientWidth == 0 && innerDiv1.clientWidth == 346 && innerDiv4.clientHeight == 0) {
        backArrow.click();
        logo.style.display = "inline-block";
    } else if (innerDiv1.clientWidth == 0 && innerDiv2.clientWidth == 0 && innerDiv4.clientHeight == 597) {
        backArrow.click();
        logo.style.display = "inline-block";
    }
});

// See All addEventListener

see.addEventListener("click", () => {
    recentlyIcon.click();
});

searchIcon.addEventListener("click", () => {
    innerDiv4.style.height = "597px";
    innerDiv4.style.transition = "height 1000ms";
    logo.style.display = "none";
    searchProgress.style.display = "inline-block";

    if (searchInput == "") {
        Img100.style.display = "none";
        noResultFound.style.display = "none";
        emptyImg.style.display = "none";
        searchResult.style.display = "inline-block";
    }
    setTimeout(() => {
        searchHeading.style.display = "block";
        innerDiv3.style.display = "block";
        searchResult.style.display = "inline-block";
        emptyImg.style.display = "inline-block";
    }, 250);

    setTimeout(() => {
        recentHistorySongs.style.display = "inline-block";
        recentHistoryHeading.style.display = "flex";
    }, 550)
});
let searchAudioCode;
let audi4 = new Audio("");
let resultSearch;
let indexNo = 1;
let indexNo2 = 0;
let searchInput = "";
let prevSongHistory = "";
searchBar.addEventListener("input", async () => {
    searchInput = searchBar.value;
    function searchRes(data3) {
        return data3.songName == searchInput;

    }
    resultSearch = data3.filter(searchRes);
    console.log(resultSearch);
    if (searchInput != "") {
        if (resultSearch.length == 0) {
            Img100.style.display = "inline-block";
            noResultFound.style.display = "inline-block";
            emptyImg.style.display = "inline-block";
            searchResult.style.display = "inline-block";
            recentHistorySongs.style.display = "inline-block";
            recentHistoryHeading.style.display = "flex";

        } else if (resultSearch.length >= 1) {
            indexNo++;
            Img100.style.display = "none";
            noResultFound.style.display = "none";
            emptyImg.style.display = "none";
            searchResult.style.display = "inline-block";
            recentHistorySongs.style.display = "inline-block";
            recentHistoryHeading.style.display = "flex";
            searchProgress.innerHTML = "";

            for (let z = 0; z <= resultSearch.length; z++) {
                searchProgress.innerHTML = `<img src="${resultSearch[z].image}" height="25px" width="25px"> <div class="songHistoryContainer">${resultSearch[z].songName}</div><br>`;
                if (`${indexNo}` == 1) {
                    indexNo2++;
                    recentHistorySongs.innerHTML += `<span class="indexing">${indexNo2}. &nbsp;</span> <img src="${resultSearch[z].image}" height="40px" width="40px"> <div class="songHistoryContainerArray">${resultSearch[z].songName}</div><br>`;
                    prevSongHistory = `${resultSearch[z].songName}`;
                } else {
                    if (searchInput != prevSongHistory) {
                        indexNo2++;
                        recentHistorySongs.innerHTML += `<span class="indexing">${indexNo2}. &nbsp;</span> <img src="${resultSearch[z].image}" height="40px" width="40px"> <div class="songHistoryContainerArray">${resultSearch[z].songName}</div><br>`;
                        prevSongHistory = `${resultSearch[z].songName}`;
                    }
                }
            }
        }
    } else if (searchInput == "") {
        Img100.style.display = "none";
        noResultFound.style.display = "none";
        emptyImg.style.display = "none";
        searchResult.style.display = "inline-block";
        recentHistorySongs.style.display = "inline-block";
        recentHistoryHeading.style.display = "flex";
        searchProgress.innerHTML = "";
    }

    searchAudioCode = document.getElementsByClassName('songHistoryContainerArray');
    let audioFxn2 = await setTimeout(() => {
        Array.from(searchAudioCode).forEach(elemen => {
            elemen.addEventListener('click', (e) => {
                audi4.pause();
                if (e.target) {
                    audi4 = new Audio(`${e.target.innerText}`);
                    audi4.play();
                }
            })
        });
    }, 2000)
});

searchBar.addEventListener('click', () => {

    if (searchInput == "") {
        Img100.style.display = "none";
        noResultFound.style.display = "none";
        emptyImg.style.display = "none";
        searchResult.style.display = "inline-block";
        recentHistorySongs.style.display = "inline-block";
        recentHistoryHeading.style.display = "flex";
    }
});

downIcon.addEventListener("click", () => {
    innerDiv5.style.height = "0px";
    innerDiv5.style.transition = "height 1000ms";
    prevSong.style.display = "none";
    playSong.style.display = "none";
    nextSong.style.display = "none";
    setTimeout(() => {
        downIcon.style.display = "none";
        imgMusic.style.display = "none";
        musicName.style.display = "none";
        singBy.style.display = "none";
        fav3.style.display = "none";
        heartImg3.style.display = "none";
        songLine.style.display = "none";
        progressBar.style.display = "none";
        timeIncrement.style.display = "none";
        timeDecrement.style.display = "none";
    }, 300);
    setTimeout(() => {
        innerDiv5.style.transform = `translateY(490px)`;
        innerDiv5.style.height = "55px";
        innerDiv5.style.borderRadius = "3px";
    }, 1000);
    setTimeout(() => {
        imgMusic.style.display = "inline-Block";
        imgMusic.style.marginTop = "2.5px";
        imgMusic.style.marginLeft = "5px";
        imgMusic.innerHTML = `<img src="${imgData[0].image}" height="50px" width="50px">`;
        musicName.style.display = "inline-Block";
        musicName.style.marginTop = "2.5px";
        musicName.style.marginLeft = "65px";
        singBy.style.display = "inline-Block";
        singBy.style.marginTop = "25px";
        singBy.style.marginLeft = "65px";
        songLine.style.display = "inline-Block";
        songLine.style.marginTop = "50px";
        songLine.style.height = "3px";
        songLine.style.marginLeft = "65px";
        progressBar.style.display = "inline-Block";
        progressBar.style.height = "2px";
        progressBar.style.marginTop = "0.2px";
        circleBar.style.display = "none";
        songList.style.height = "270px";
    }, 1550);
});

innerDiv5.addEventListener("click", () => {
    if (innerDiv5.clientHeight == 55) {
        logo.style.display = "none";
        setTimeout(() => {
            imgMusic.style.display = "none";
            imgMusic.innerHTML = `<img src="${imgData[0].image}" height="250px" width="250px">`;
            imgMusic.style.marginTop = "40px";
            imgMusic.style.marginLeft = "50px";
            musicName.style.display = "none";
            musicName.style.marginTop = "300px";
            musicName.style.marginLeft = "50px";
            singBy.style.display = "none";
            singBy.style.marginTop = "322px";
            singBy.style.marginLeft = "50px";
            songLine.style.display = "none";
            songLine.style.marginTop = "350px";
            songLine.style.height = "4px";
            songLine.style.marginLeft = "50px";
            progressBar.style.display = "none";
            progressBar.style.height = "2.6px";
            progressBar.style.marginTop = "1px";
            circleBar.style.display = "none";
            innerDiv5.style.transform = `translateY(0px)`;
            innerDiv5.style.height = "597px";
        }, 100);
        setTimeout(() => {
            downIcon.style.display = "inline-block";
        }, 480);
        setTimeout(() => {
            imgMusic.style.display = "inline-block";
        }, 470);
        setTimeout(()=>{
            musicName.style.display = "inline-block";
            singBy.style.display = "inline-block";
            fav3.style.display = "inline-block";
            heartImg3.style.display = "inline-block";
            songLine.style.display = "inline-block";
            progressBar.style.display = "inline-block";
            timeIncrement.style.display = "inline-block";
            timeDecrement.style.display = "inline-block";
            prevSong.style.display = "inline-block";
            prevSong.style.marginLeft = "80px";
            playSong.style.display = "inline-block";
            playSong.style.marginLeft = "166px";
            nextSong.style.display = "inline-block";
            nextSong.style.marginLeft = "259px";
        },500);
    }
});

playSong.addEventListener("click", () => {
    if (playSongDetector == false) {
        playSong.innerHTML = `<i class="fa-solid fa-circle-play fa-2xl"></i>`;
        audi2.pause();
        audi6.pause();
        audi7.pause();
        playSongDetector = true;
        // progressBarDetector = true;
    } else if (playSongDetector == true) {
        playSong.innerHTML = `<i class="fa-solid fa-circle-pause fa-2xl"></i>`;
        audi2.play();
        audi6.play();
        audi7.play();
        // progressBarDetector = false;
        playSongDetector = false;
        // MusicTimer();
        // MusicTimerLoop();
    }
});


songLine.addEventListener('click', (e) => {
    let coordinateX = circleBarHidden.getBoundingClientRect().x;
    bear = `${(e.clientX) - coordinateX}`;
    progressBarIncrement = bear * 9.85;
    progressBar.style.width = `${(bear)}px`;
    progressBar.style.transition = `width 200ms`;
    timeTargetDetector = true;
    timeInc();
})

prevSong.addEventListener('click', () => {
    audi2.pause();
    audi2 = new Audio("");
    audi6.pause();
    audi7.pause();
    audi7 = new Audio("");
    glow = Array.from(songArray);
    function newFilterFxn(data3) {
        return data3.singerName == singBy.innerText;
    }

    imgfxn = data3.filter(newFilterFxn);
    for (h = 0; h < glow.length; h++) {
        if (glow[h].innerText == musicName.innerText) {
            // console.log("h value is : " + h);
            musicName.innerText = glow[h - 1].innerText;
            imgMusic.innerHTML = `<img src="${imgfxn[h - 1].image}" height="250px" width="250px">`;
            audi6 = new Audio(`${glow[h - 1].innerText}`);
            audi6.play();
            break;
        }
    }
});

nextSong.addEventListener('click',()=>{
    audi2.pause();
    audi2 = new Audio("");
    audi6.pause();
    audi6 = new Audio("");
    audi7.pause();

    glowNext = Array.from(songArray);

    function newFilterNext(data3){
        return data3.singerName == singBy.innerText;
    }

    imgfxn3 = data3.filter(newFilterNext);

    for(r=0; r< glowNext.length; r++){
        if(glowNext[r].innerText == musicName.innerText){
            console.log("r value is :" + r);
            musicName.innerText = glowNext[r+1].innerText;
            imgMusic.innerHTML = `<img src="${imgfxn3[r + 1].image}" height="250px" width="250px">`;
            audi7 = new Audio(`${glowNext[r + 1].innerText}`);
            audi7.play();
            break;
        }
    }
})

let d = 0;
let audi8;
playAll.addEventListener('click', () => {
    audi2.pause();
    audi2 = new Audio("");
    audi6.pause();
    audi6 = new Audio("");
    audi7.pause();
    audi7 = new Audio("");
    glow4 = Array.from(songArray);
    
    function songsContainer(){
        audi8 = new Audio(glow4[d].innerText);
        replaySong();
    }
    songsContainer();
     
    function replaySong(){
        if(progressBar.clientWidth<251){
            audi8.play();
        }else if(progressBar.clientWidth>=251){
            audi8.pause();
            d++;
            songsContainer();
        }
    }
})

// let readR = false;
// nextSong.addEventListener('click', () => {
//     audi2.pause();
//     audi6.pause();
//     audi7.pause();
//     if(readR = true){
//         r++;
//     }
//     glow2 = Array.from(songArray);
//     function newFilterFxn2(data3){
//         return data3.singerName == singBy.innerText;
//     }
//     imgfxn2 = data3.filter(newFilterFxn2);

//     for (h = 0; h < glow2.length; h++) {
//         if (glow2[h].innerText == musicName.innerText) {
//             console.log("r value is : " + r);
//             // readR = true;
//             // musicName.innerText = glow2[r+1].innerText;
//             imgMusic.innerHTML = `<img src="${imgfxn2[h+1].image}" height="250px" width="250px">`;
//             audi7 = new Audio(`${glow2[h+1].innerText}`);
//             audi7.play();
//         }
//     }
// })

// circleBar.addEventListener('dblclick',(e)=>{
//     circleBar.draggable = true;
//     progressBar.style.width = `${circleBar.clientX-e.getBoundingClientRect().x}px`;
// })

// circleBar.addEventListener('dragstart',(e)=>{
//     progressBar.style.width = `${e.getBoundingClientRect().x-circleBarHidden.getBoundingClientRect().x}px`;
// })

// circleBar.addEventListener('dragend',(e)=>{
//     progressBar.style.width = `${e.getBoundingClientRect().x-circleBarHidden.getBoundingClientRect().x}px`;
// })

// circleBar.addEventListener('dragover',()=>{
//     progressBar.style.width = `${e.getBoundingClientRect().x-circleBarHidden.getBoundingClientRect().x}px`;
// })