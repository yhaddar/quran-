class Player {
    constructor () {
        // edit media screen :
        var heightmain = document.querySelector('.Player');
        heightmain.style.height = screen.height + "auto";
        if (screen.width < 620) heightmain.style.width = screen.width + "px";

        this.audio_player = document.querySelector('.audio');
        this.audio_title = document.querySelector('.title1');
        this.image = document.querySelector('.img');
        // Playing audio : 
        this.play_audio = document.querySelector('.button2 ion-icon');
        this.play_audio.addEventListener('click', () => {
            this.Play();
        });
        // Paused audio : 
        this.pause_audio = document.querySelector('.button2 .play');
        this.pause_audio.addEventListener('click', () => {
            this.Pause();
        });
 
        // data arrays names :
        this.audio_name = [];
        this.audio_name[0]   = "Sura Al-Fateha - سورة الفاتحة";    this.audio_name[1]   = "Sura Al-Bakara - سورة البقرة";         this.audio_name[2]   = "Sura Al-Emran - سورة آل عمران";
        this.audio_name[3]   = "Sura Al-Nesaa - سورة النساء";      this.audio_name[4]   = "Sura Al-Maeda - سورة المائدة";         this.audio_name[5]   = "Sura Al-Anaam - سورة الأنعام"; 
        this.audio_name[6]   = "Sura Al-Aaraf - سورة الأعراف";      this.audio_name[7]   = "Sura Al-Anfal - سورة الأنفال";          this.audio_name[8]   ="Sura Al-Tawba - سورة التوبة"; 
        this.audio_name[9]   = "Sura Younos - سورة يونس";          this.audio_name[10]  = "Sura Hood - سورة هود";                 this.audio_name[11]  = "Sura Yusuf - سورة يوسف";
        this.audio_name[12]  ="Sura Al-Raad - سورة الرعد";         this.audio_name[13]  = "Sura Ibrahim - سورة إبراهيم";          this.audio_name[14]  = "Sura Al-Hejr - سورة الحجر"; 
        this.audio_name[15]  = "Sura Al-Nahl - سورة النحل";        this.audio_name[16]  = "Sura Al-Esraa - سورة الإسراء";          this.audio_name[17]  ="Sura Al-Kahf - سورة الكهف"; 
        this.audio_name[18]  = "Sura Mariam - سورة مريم";          this.audio_name[19]  = "Sura Taha - سورة طه.";                 this.audio_name[20]  = "Sura Al-Anbiaa - سورة الأنبياء"; 
        this.audio_name[21]  = "Sura Al-Haj - سورة الحج";          this.audio_name[22]  ="Sura Al-Moameno - سورة المؤمنون";      this.audio_name[23]  = "Sura Al-Nour - سورة النور";
        this.audio_name[24]  = "Sura Al-Forkan - سورة الفرقان";    this.audio_name[25]  = "Sura Al-Shoaraa - سورة الشعراء";      this.audio_name[26]  = "Sura Al-Naml - سورة النمل"; 
        this.audio_name[27]  = "Sura Al-Kasas - سورة القصص";       this.audio_name[28]  = "Sura Al-Ankabot - سورة العنكبوت";     this.audio_name[29]  = "Sura Al-Rom - سورة الروم"; 
        this.audio_name[30]  = "Sura Lokman - سورة لقمان";         this.audio_name[31]  = "Sura Al-Sajda - سورة السجدة";         this.audio_name[32]  ="Sura Al-Ahzab - سورة الأحزاب";
        this.audio_name[33] = "Sura Sabaa - سورة سبأ";             this.audio_name[34]  = "Sura Fater - سورة فاطر";              this.audio_name[35]  ="Sura Yassein - سورة يس"; 
        this.audio_name[36]  ="Sura Al-Saffat - سورة الصافات";     this.audio_name[37]  = "Sura Sadd - سورة ص" ;                 this.audio_name[38]  = "Sura Al-Zomar - سورة الزمر"; 
        this.audio_name[39]  ="Sura Ghafer - سورة غافر";           this.audio_name[40]  ="Sura Fosselat - سورة فصلت";            this.audio_name[41]  = "Sura Al-Shora - سورة الشورى";
        this.audio_name[42]  = "Sura Al-Zokhrof - سورة الزخرف";    this.audio_name[43]  = "Sura Al-Dokhan - سورة الدخان";        this.audio_name[44]  = "Sura Al-Jathia - سورة الجاثية"; 
        this.audio_name[45]  = "Sura Al-Ahkaf - سورة الأحقاف";      this.audio_name[46]  = "Sura Muhammad - سورة محمد";           this.audio_name[47]  = "Sura Al-Fath - سورة الفتح"; 
        this.audio_name[48]  = "Sura Al-Hojorat - سورة الحجرات";   this.audio_name[49]  ="Sura kaf - سورة ق";                    this.audio_name[50]  = "Sura Al-Zariat - سورة الذاريات"; 
        this.audio_name[51]  = "Sura Al-Tor - سورة الطور";         this.audio_name[52]  = "Sura Al-Najm - سورة النجم";           this.audio_name[53]  = "Sura Al-Kamar - سورة القمر";
        this.audio_name[54]  = "Sura Al-Rahman - سورة الرحمن";     this.audio_name[55]  ="Sura Al-Wakea - سورة الواقعة";         this.audio_name[56]  = "Sura Al-Hadid - سورة الحديد"; 
        this.audio_name[57]  = "Sura Al-Mojadala - سورة المجادلة"; this.audio_name[58]  = "Sura Al-Hashr - سورة الحشر";          this.audio_name[59]  = "Sura Al-Momtahana - سورة الممتحنة"; 
        this.audio_name[60]  = "Sura Al-Saf - سورة الصف";          this.audio_name[61]  = "Sura Al-Jomoa - سورة الجمعة";         this.audio_name[62]  = "Sura Al-Monafekon - سورة المنافقون"; 
        this.audio_name[63]  = "Sura Al-Taghabon - سورة التغابن";  this.audio_name[64]  = "Sura Al-Talak - سورة الطلاق";          this.audio_name[65]  = "Sura Al-Tahreem - سورة التحريم";
        this.audio_name[66]  = "Sura Al-Molk - سورة الملك";        this.audio_name[67]  = "Sura Al-kalam - سورة القلم";          this.audio_name[68]  = "Sura Al-Hakka - سورة الحاقة"; 
        this.audio_name[69]  = "Sura Al-Maarej - سورة المعارج";    this.audio_name[70]  = "Sura Nouh - سورة نوح";                this.audio_name[71]  = "Sura Al-Jen - سورة الجن"; 
        this.audio_name[72]  = "Sura Al-Mozamil - سورة المزمل";    this.audio_name[73]  = "Sura Al-Modather - سورة المدثر";      this.audio_name[74]  ="Sura Al-Keiama - سورة القيامة"; 
        this.audio_name[75]  = "Sura Al-Ensan - سورة الإنسان";      this.audio_name[76]  = "Sura Al-Morssalat - سورة المرسلات";    this.audio_name[77]  = "Sura Al-Nabaa - سورة النبأ";
        this.audio_name[78]  = "Sura Al-Nazeat - سورة النازعات";   this.audio_name[79]  = "Sura Abasa - سورة عبس";               this.audio_name[80]  = "Sura Al-Takwir - سورة التكوير"; 
        this.audio_name[81]  = "Sura Al-Enfetar - سورة الانفطار";   this.audio_name[82]  = "Sura Al-Motaffefin - سورة المطففين";  this.audio_name[83]  = "Sura Al-Enshekak - سورة الانشقاق"; 
        this.audio_name[84]  = "Sura Al-Boroj - سورة البروج";      this.audio_name[85]  = "Sura Al-Tarek - سورة الطارق";         this.audio_name[86]  = "Sura Al-Aala - سورة الأعلى"; 
        this.audio_name[87]  = "Sura Al-Ghashia - سورة الغاشية";   this.audio_name[88]  = "Sura Al-Fajr - سورة الفجر";           this.audio_name[89]  = "Sura Al-Balad - سورة البلد";
        this.audio_name[90]  ="Sura Al-Shams - سورة الشمس";        this.audio_name[91]  = "Sura Al-Lail - سورة الليل";           this.audio_name[92]  ="Sura Al-Doha - سورة الضحى"; 
        this.audio_name[93]  = "Sura Al-Sharh - سورة الشرح";       this.audio_name[94]  = "Sura Al-Teen - سورة التين";           this.audio_name[95]  = "Sura Al-Alak - سورة العلق"; 
        this.audio_name[96]  = "Sura Al-kadr - سورة القدر";        this.audio_name[97]  = "Sura Al-Baiena - سورة البينة";        this.audio_name[98]  = "Sura Al-Zalzala - سورة الزلزلة"; 
        this.audio_name[99]  = "Sura Al-Adiat - سورة العاديات";    this.audio_name[100] = "Sura Al-Karea - سورة القارعة";        this.audio_name[101] = "Sura Al-Takathor - سورة التكاثر";
        this.audio_name[102] = "Sura Al-Asr - سورة العصر";         this.audio_name[103] ="Sura Al-Homaza - سورة الهمزة";         this.audio_name[104] = "Sura Al-Feel - سورة الفيل"; 
        this.audio_name[105] = "Sura Koraish - سورة قريش";         this.audio_name[106] = "Sura Al-Maaon - سورة الماعون";        this.audio_name[107] ="Sura Al-Kawthar - سورة الكوثر"; 
        this.audio_name[108] = "Sura Al-Kaferon - سورة الكافرون";  this.audio_name[109] = "Sura Al-Nasr - سورة النصر";           this.audio_name[110] = "Sura Al-Masad - سورة المسد"; 
        this.audio_name[111] = "Sura Al-Ekhlas - سورة الإخلاص";      this.audio_name[112] = "Sura Al-Falak - سورة الفلق";          this.audio_name[113] = "Sura Al-Nas - سورة الناس";
        // data arrays source :
        this.audio_file = [];
        this.audio_file[0]   = "https://server8.mp3quran.net/frs_a/001.mp3";  this.audio_file[1]   = "https://server8.mp3quran.net/frs_a/002.mp3";  this.audio_file[2]   = "https://server8.mp3quran.net/frs_a/003.mp3"; 
        this.audio_file[3]   = "https://server8.mp3quran.net/frs_a/004.mp3";  this.audio_file[4]   = "https://server8.mp3quran.net/frs_a/005.mp3";  this.audio_file[5]   = "https://server8.mp3quran.net/frs_a/006.mp3"; 
        this.audio_file[6]   = "https://server8.mp3quran.net/frs_a/007.mp3";  this.audio_file[7]   = "https://server8.mp3quran.net/frs_a/008.mp3";  this.audio_file[8]   = "https://server8.mp3quran.net/frs_a/009.mp3"; 
        this.audio_file[9]   = "https://server8.mp3quran.net/frs_a/010.mp3";  this.audio_file[10]  = "https://server8.mp3quran.net/frs_a/011.mp3";  this.audio_file[11]  = "https://server8.mp3quran.net/frs_a/012.mp3";
        this.audio_file[12]  = "https://server8.mp3quran.net/frs_a/013.mp3";  this.audio_file[13]  = "https://server8.mp3quran.net/frs_a/014.mp3";  this.audio_file[14]  = "https://server8.mp3quran.net/frs_a/015.mp3"; 
        this.audio_file[15]  = "https://server8.mp3quran.net/frs_a/016.mp3";  this.audio_file[16]  = "https://server8.mp3quran.net/frs_a/017.mp3";  this.audio_file[17]  = "https://server8.mp3quran.net/frs_a/018.mp3"; 
        this.audio_file[18]  = "https://server8.mp3quran.net/frs_a/019.mp3";  this.audio_file[19]  = "https://server8.mp3quran.net/frs_a/020.mp3";  this.audio_file[20]  = "https://server8.mp3quran.net/frs_a/021.mp3"; 
        this.audio_file[21]  = "https://server8.mp3quran.net/frs_a/022.mp3";  this.audio_file[22]  = "https://server8.mp3quran.net/frs_a/023.mp3";  this.audio_file[23]  = "https://server8.mp3quran.net/frs_a/024.mp3";
        this.audio_file[24]  = "https://server8.mp3quran.net/frs_a/025.mp3";  this.audio_file[25]  = "https://server8.mp3quran.net/frs_a/026.mp3";  this.audio_file[26]  = "https://server8.mp3quran.net/frs_a/027.mp3"; 
        this.audio_file[27]  = "https://server8.mp3quran.net/frs_a/028.mp3";  this.audio_file[28]  = "https://server8.mp3quran.net/frs_a/029.mp3";  this.audio_file[29]  = "https://server8.mp3quran.net/frs_a/030.mp3"; 
        this.audio_file[30]  = "https://server8.mp3quran.net/frs_a/031.mp3";  this.audio_file[31]  = "https://server8.mp3quran.net/frs_a/032.mp3";  this.audio_file[32]  = "https://server8.mp3quran.net/frs_a/033.mp3"; 
        this.audio_file[33]  = "https://server8.mp3quran.net/frs_a/034.mp3";  this.audio_file[34]  = "https://server8.mp3quran.net/frs_a/035.mp3";  this.audio_file[35]  = "https://server8.mp3quran.net/frs_a/036.mp3";
        this.audio_file[36]  = "https://server8.mp3quran.net/frs_a/037.mp3";  this.audio_file[37]  = "https://server8.mp3quran.net/frs_a/038.mp3";  this.audio_file[38]  = "https://server8.mp3quran.net/frs_a/039.mp3"; 
        this.audio_file[39]  = "https://server8.mp3quran.net/frs_a/040.mp3";  this.audio_file[40]  = "https://server8.mp3quran.net/frs_a/041.mp3";  this.audio_file[41]  = "https://server8.mp3quran.net/frs_a/042.mp3"; 
        this.audio_file[42]  = "https://server8.mp3quran.net/frs_a/043.mp3";  this.audio_file[43]  = "https://server8.mp3quran.net/frs_a/044.mp3";  this.audio_file[44]  = "https://server8.mp3quran.net/frs_a/045.mp3"; 
        this.audio_file[45]  = "https://server8.mp3quran.net/frs_a/046.mp3";  this.audio_file[46]  = "https://server8.mp3quran.net/frs_a/047.mp3";  this.audio_file[47]  = "https://server8.mp3quran.net/frs_a/048.mp3";
        this.audio_file[48]  = "https://server8.mp3quran.net/frs_a/049.mp3";  this.audio_file[49]  = "https://server8.mp3quran.net/frs_a/050.mp3";  this.audio_file[50]  = "https://server8.mp3quran.net/frs_a/051.mp3"; 
        this.audio_file[51]  = "https://server8.mp3quran.net/frs_a/052.mp3";  this.audio_file[52]  = "https://server8.mp3quran.net/frs_a/053.mp3";  this.audio_file[53]  = "https://server8.mp3quran.net/frs_a/054.mp3"; 
        this.audio_file[54]  = "https://server8.mp3quran.net/frs_a/055.mp3";  this.audio_file[55]  = "https://server8.mp3quran.net/frs_a/056.mp3";  this.audio_file[56]  = "https://server8.mp3quran.net/frs_a/057.mp3"; 
        this.audio_file[57]  = "https://server8.mp3quran.net/frs_a/058.mp3";  this.audio_file[58]  = "https://server8.mp3quran.net/frs_a/059.mp3";  this.audio_file[59]  = "https://server8.mp3quran.net/frs_a/060.mp3";
        this.audio_file[60]  = "https://server8.mp3quran.net/frs_a/061.mp3";  this.audio_file[61]  = "https://server8.mp3quran.net/frs_a/062.mp3";  this.audio_file[62]  = "https://server8.mp3quran.net/frs_a/063.mp3"; 
        this.audio_file[63]  = "https://server8.mp3quran.net/frs_a/064.mp3";  this.audio_file[64]  = "https://server8.mp3quran.net/frs_a/065.mp3";  this.audio_file[65]  = "https://server8.mp3quran.net/frs_a/066.mp3"; 
        this.audio_file[66]  = "https://server8.mp3quran.net/frs_a/067.mp3";  this.audio_file[67]  = "https://server8.mp3quran.net/frs_a/068.mp3";  this.audio_file[68]  = "https://server8.mp3quran.net/frs_a/069.mp3"; 
        this.audio_file[69]  = "https://server8.mp3quran.net/frs_a/070.mp3";  this.audio_file[70]  = "https://server8.mp3quran.net/frs_a/071.mp3";  this.audio_file[71]  = "https://server8.mp3quran.net/frs_a/072.mp3";
        this.audio_file[72]  = "https://server8.mp3quran.net/frs_a/073.mp3";  this.audio_file[73]  = "https://server8.mp3quran.net/frs_a/074.mp3";  this.audio_file[74]  = "https://server8.mp3quran.net/frs_a/075.mp3"; 
        this.audio_file[75]  = "https://server8.mp3quran.net/frs_a/076.mp3";  this.audio_file[76]  = "https://server8.mp3quran.net/frs_a/077.mp3";  this.audio_file[77]  = "https://server8.mp3quran.net/frs_a/078.mp3"; 
        this.audio_file[78]  = "https://server8.mp3quran.net/frs_a/079.mp3";  this.audio_file[80]  = "https://server8.mp3quran.net/frs_a/081.mp3";  this.audio_file[81]  = "https://server8.mp3quran.net/frs_a/082.mp3"; 
        this.audio_file[82]  = "https://server8.mp3quran.net/frs_a/083.mp3";  this.audio_file[83]  = "https://server8.mp3quran.net/frs_a/084.mp3";  this.audio_file[84]  = "https://server8.mp3quran.net/frs_a/085.mp3"; 
        this.audio_file[85]  = "https://server8.mp3quran.net/frs_a/086.mp3";  this.audio_file[86]  = "https://server8.mp3quran.net/frs_a/087.mp3";  this.audio_file[87]  = "https://server8.mp3quran.net/frs_a/088.mp3"; 
        this.audio_file[88]  = "https://server8.mp3quran.net/frs_a/089.mp3";  this.audio_file[89]  = "https://server8.mp3quran.net/frs_a/090.mp3";  this.audio_file[90]  = "https://server8.mp3quran.net/frs_a/091.mp3"; this.audio_file[91]  = "https://server8.mp3quran.net/frs_a/092.mp3"; 
        this.audio_file[92]  = "https://server8.mp3quran.net/frs_a/093.mp3";  this.audio_file[93]  = "https://server8.mp3quran.net/frs_a/094.mp3";  this.audio_file[94]  = "https://server8.mp3quran.net/frs_a/095.mp3"; 
        this.audio_file[95]  = "https://server8.mp3quran.net/frs_a/096.mp3";  this.audio_file[96]  = "https://server8.mp3quran.net/frs_a/097.mp3";  this.audio_file[97]  = "https://server8.mp3quran.net/frs_a/098.mp3";
        this.audio_file[98]  = "https://server8.mp3quran.net/frs_a/099.mp3";  this.audio_file[99]  = "https://server8.mp3quran.net/frs_a/100.mp3";  this.audio_file[100] = "https://server8.mp3quran.net/frs_a/101.mp3";       this.audio_file[101] = "https://server8.mp3quran.net/frs_a/102.mp3";
        this.audio_file[102] = "https://server8.mp3quran.net/frs_a/103.mp3";  this.audio_file[103] = "https://server8.mp3quran.net/frs_a/104.mp3";  this.audio_file[104] = "https://server8.mp3quran.net/frs_a/105.mp3"; 
        this.audio_file[105] = "https://server8.mp3quran.net/frs_a/106.mp3";  this.audio_file[106] = "https://server8.mp3quran.net/frs_a/107.mp3";  this.audio_file[107] = "https://server8.mp3quran.net/frs_a/108.mp3"; 
        this.audio_file[108] = "https://server8.mp3quran.net/frs_a/109.mp3";  this.audio_file[109] = "https://server8.mp3quran.net/frs_a/110.mp3";  this.audio_file[110] = "https://server8.mp3quran.net/frs_a/111.mp3"; 
        this.audio_file[111] = "https://server8.mp3quran.net/frs_a/112.mp3";  this.audio_file[112] = "https://server8.mp3quran.net/frs_a/113.mp3";  this.audio_file[113] = "https://server8.mp3quran.net/frs_a/114.mp3";
        this.server = 0;
        
        // Playing Next audio : 
        this.next = document.querySelector('.button3 ion-icon');
        this.next.addEventListener('click', () => {
            this.Next();

        });
        // Playing prev audio :
        this.prev = document.querySelector('.button1 ion-icon');
        this.prev.addEventListener('click', () => {
            this.Prev();
        });
        // Range Volume :
        this.number1 = document.querySelector('.number1');
        this.volume_range = document.querySelector('.volume');
        this.volume_range.addEventListener('change', () => {
            this.SlideValue();
        });
        // Select Duration of audio :
        this.audio_player.addEventListener('timeupdate', (e) => {
            this.currentTime = e.target.currentTime;
            this.duration = e.target.duration;
            this.progress = ( this.currentTime / this.duration ) * 100;
            this.volume_range.style.width = `${this.progress}%`;
            this.QuranCurrent = document.querySelector('.current');
            this.currentMin = Math.floor(this.currentTime / 60);
            this.currentSec = Math.floor(this.currentTime % 60);
            this.QuranCurrent.innerHTML = `${this.currentMin} : ${this.currentSec}`;
        });
        // Select Duration of audio arrival : 
        this.audio_player.addEventListener('loadeddata', () => {
            this.Loadeddata();
        });
        // Event after the end :
        this.audio_player.addEventListener('ended', () => {
            this.Ended();
        })
        
    }
    Play() {
        //Playn audio :
        this.audio_player.play();
        // Change icon :
        this.pause_audio.style.display = 'block';
        this.play_audio.style.display = 'none';
        // Palaying animation of image :
        this.image.style.animationPlayState = 'running';
        this.audio_player.autoplay = true;
        this.audio_player.load();
    }
    Pause() {
        // Paused audio :
        this.audio_player.pause();
        // change icon:
        this.pause_audio.style.display = 'none';
        this.play_audio.style.display = 'block';
        // Paused animation :
        this.image.style.animationPlayState = 'paused';
    }
    setResource() {
        // Add arrays :
        this.audio_title.innerHTML = this.audio_name[this.server];
        this.audio_player.src = this.audio_file[this.server];
        // if range audio = 0, reset :
        this.resetSlider();
    }
    Next() {
        // Playing Next audio :
        if (this.server < this.audio_file.length - 1) ++this.server; else this.server = 0;
        this.setResource();
        return this.Pause() ? this.Pause() : this.Play();
    }
    Prev() {
        // Playing Prev audio :
        if (this.server <= 0) --this.server;
        if(this.server >= 0) --this.server; else  this.server = this.audio_file.length -1;
        this.setResource();
        return this.Pause() ? this.Pause() : this.Play();
        
    }
    SlideValue() {
        this.audio_player.currentTime = this.audio_player.duration * (this.volume_range.value / 100);
    }
    resetSlider() {
        this.volume_range.value = 0;
    }
    Loadeddata() {
        this.QuranDuration = document.querySelector('.duration');
        this.duration = this.audio_player.duration;
        this.QuranDuration.innerHTML = `${Math.floor(this.duration / 60)}: ${Math.floor(this.duration % 60)}`;
    };
    Ended() {
        this.pause_audio.style.display = 'none';
        this.play_audio.style.display = 'block';
        this.image.style.animationPlayState = 'paused';
        this.audio_player.loop = true;
        if (this.server < this.audio_file.length - 1) ++this.server;
    }
}
onload = new Player();