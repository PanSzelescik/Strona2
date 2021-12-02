// Funkcje zadań zaczynają się około 400. linijki

// Używane w zadaniu 1.
const male_samogloski = 'eęyuioóaą';
const duze_samogloski = male_samogloski.toUpperCase();
const samogloski = (male_samogloski + duze_samogloski).split('');

// Używane w zadaniu 3. 4. i 5.
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu condimentum nibh, ut tempus turpis. Nam suscipit pretium pulvinar. Sed tincidunt felis sed viverra congue. Phasellus laoreet cursus ligula, at suscipit elit condimentum et. Phasellus ac sollicitudin tellus, sed tempor urna. Donec tincidunt tellus non diam sodales sagittis. Vivamus dignissim orci ligula. Nullam sit amet tellus tortor. Morbi iaculis justo id risus convallis, ut dictum augue vulputate. Cras at rhoncus metus, nec malesuada eros. Donec rhoncus consectetur sem, nec scelerisque velit efficitur et. Vestibulum bibendum nisi velit, vel tempus risus porttitor et. Morbi quis lectus bibendum, cursus velit vitae, blandit lectus. Donec id turpis risus. Fusce nunc nulla, ultricies id turpis nec, mattis ornare nulla. Quisque posuere nunc non laoreet posuere. Vivamus malesuada eget augue vitae porttitor. Mauris dapibus, nisi a vehicula congue, dui lorem volutpat felis, at molestie erat diam non risus. In et pretium tellus. Sed tristique, tortor vel pretium pulvinar, risus neque viverra eros, vitae vehicula lacus augue ac purus. Curabitur ut pulvinar erat. Nullam mattis felis eget leo volutpat, sed sagittis eros blandit. Morbi blandit, nunc tempus fermentum feugiat, lorem sapien rhoncus neque, id vulputate ligula augue id augue. Praesent vitae fringilla tellus. Vestibulum vulputate nisi non diam accumsan, vel cursus massa auctor. In dictum odio non mi pellentesque, at maximus odio consequat. Nam mauris odio, mollis eget viverra et, consectetur quis urna. Morbi pellentesque sem nec ligula lacinia, a pulvinar enim tristique. Nullam sit amet ipsum eget urna efficitur tempor. Nam venenatis lacinia interdum. Nulla facilisi. Nunc sollicitudin consectetur eleifend. Phasellus eu pulvinar lorem. Integer lobortis dapibus est sit amet efficitur. Nulla sit amet tellus vehicula, dignissim turpis eu, tristique ligula. Mauris molestie tortor at commodo vehicula. Proin blandit varius enim, in ullamcorper erat lobortis nec. Proin volutpat, est at tempor aliquam, mauris enim blandit leo, ut faucibus nisl est id eros. In lobortis urna urna, a consequat nisi volutpat nec. Morbi facilisis hendrerit semper. Integer vitae laoreet lacus, quis malesuada magna. Mauris egestas vestibulum sapien, vel euismod odio tristique et. Quisque pharetra neque auctor lorem viverra, ac facilisis mauris gravida. Aliquam eu massa magna. Cras fermentum porta sem id imperdiet. Nullam eget sem justo. In id lobortis libero. Vestibulum quis fringilla odio. Donec tempus congue aliquet. Donec cursus nisi enim, vel pulvinar nunc commodo sit amet. Nulla eget malesuada turpis. Proin ut dui varius, semper risus consequat, sollicitudin dolor. Etiam quis lacus ac risus lobortis ornare. Vivamus quam orci, sodales sed nibh non, tempus ornare nunc. Suspendisse gravida lorem vel ipsum fringilla, ut suscipit tortor vulputate. Curabitur nec tristique enim. Pellentesque risus sem, porta sed aliquet sed, fringilla sed purus. Integer volutpat et nisl vitae lobortis. Nunc a pharetra tortor, eget congue urna. Integer lacinia lacus non mi maximus, a ornare enim tincidunt. Nullam eu ultricies mi. Vestibulum finibus scelerisque imperdiet. Sed tincidunt pretium metus, varius interdum lacus commodo vel.';

// Używane w zadaniu 12.
const liczby = [686, 805, 318, 920, 646, 281, 699, 876, 476, 302, 20, 955, 310, 326, 160, 805, 103, 237, 899, 657, 676, 949, 919, 967, 925, 417, 496, 765, 704, 646, 688, 781, 787, 840, 514, 188, 817, 575, 367, 854, 946, 580, 73, 601, 452, 728, 885, 363, 602, 493, 184, 838, 364, 520, 541, 204, 655, 893, 412, 794, 132, 585, 723, 637, 452, 196, 648, 345, 199, 540, 672, 546, 299, 606, 581, 521, 924, 207, 572, 924, 437, 148, 655, 486, 586, 321, 825, 752, 986, 681, 571, 699, 596, 333, 357, 627, 146, 336, 921, 442, 651, 794, 968, 756, 558, 542, 560, 121, 951, 518, 173, 313, 621, 400, 62, 148, 748, 32, 237, 865, 142, 535, 515, 826, 60, 19, 817, 899, 516, 29, 174, 176, 868, 275, 22, 956, 132, 721, 985, 475, 615, 278, 773, 144, 193, 467, 861, 691, 354, 209, 28, 75, 716, 285, 778, 329, 496, 67, 37, 583, 893, 646, 440, 742, 447, 288, 555, 706, 108, 970, 921, 128, 594, 867, 760, 870, 566, 658, 251, 697, 568, 825, 707, 698, 386, 665, 822, 846, 341, 135, 985, 591, 202, 798, 481, 468, 16, 555, 505, 565, 566, 329, 731, 211, 346, 306, 32, 596, 767, 112, 452, 773, 590, 319, 64, 492, 174, 381, 610, 333, 534, 226, 902, 894, 855, 933, 244, 795, 658, 840, 886, 293, 287, 733, 970, 598, 788, 756, 540, 939, 818, 364, 42, 72, 938, 375, 529, 584, 909, 48, 440, 79, 243, 787, 955, 698, 849, 751, 595, 629, 117, 345, 901, 305, 814, 140, 644, 462, 152, 585, 404, 269, 485, 956, 844, 863, 901, 219, 477, 533, 49, 569, 721, 895, 909, 842, 281, 92, 63, 673, 299, 943, 67, 347, 31, 771, 139, 381, 538, 69, 473, 785, 603, 75, 162, 317, 894, 676, 254, 905, 88, 693, 827, 551, 710, 603, 24, 345, 632, 307, 454, 378, 746, 700, 919, 60, 109, 95, 253, 911, 168, 667, 659, 742, 875, 151, 148, 978, 392, 255, 61, 125, 914, 757, 110, 40, 203, 190, 561, 781, 331, 139, 157, 95, 825, 450, 450, 868, 614, 592, 19, 690, 715, 524, 53, 878, 263, 252, 398, 856, 924, 366, 292, 81, 144, 120, 682, 667, 647, 764, 669, 380, 580, 735, 370, 655, 646, 352, 370, 169, 909, 317, 34, 886, 826, 508, 922, 174, 766, 924, 589, 528, 80, 342, 86, 520, 436, 18, 49, 741, 67, 223, 976, 406, 850, 570, 660, 395, 36, 575, 975, 884, 844, 80, 964, 425, 127, 795, 954, 463, 868, 687, 137, 697, 560, 844, 933, 961, 816, 880, 177, 614, 416, 640, 379, 37, 496, 877, 223, 691, 579, 775, 715, 247, 274, 111, 125, 123, 130, 409, 612, 914, 276, 965, 147, 415, 361, 660, 542, 681, 826, 863, 983, 926, 979, 62, 490, 725, 396, 108, 147, 120, 220, 178, 663, 261, 458, 143, 584, 135, 714, 350, 498, 303, 105, 499, 51, 209, 455, 634, 369, 765, 816, 459, 73, 163, 351, 239, 399, 350, 592, 572, 139, 490, 202, 798, 696, 292, 823, 459, 174, 136, 258, 502, 905, 550, 445, 763, 581, 687, 122, 555, 554, 165, 158, 317, 904, 715, 608, 152, 238, 775, 547, 551, 665, 940, 104, 942, 228, 566, 532, 405, 312, 696, 313, 863, 541, 381, 181, 338, 453, 516, 513, 33, 393, 389, 632, 638, 405, 148, 97, 311, 769, 404, 345, 775, 355, 634, 336, 856, 815, 962, 462, 738, 852, 24, 635, 104, 173, 212, 403, 800, 471, 563, 987, 856, 350, 318, 432, 722, 254, 60, 148, 43, 938, 837, 419, 209, 274, 193, 490, 572, 124, 271, 515, 521, 531, 348, 551, 122, 552, 312, 765, 406, 155, 397, 382, 637, 653, 86, 671, 937, 424, 956, 931, 37, 574, 543, 434, 321, 153, 23, 762, 118, 939, 670, 853, 587, 63, 725, 532, 860, 185, 747, 319, 568, 706, 890, 439, 948, 788, 977, 908, 472, 455, 92, 939, 396, 299, 386, 651, 866, 398, 777, 677, 373, 116, 978, 439, 553, 151, 882, 34, 934, 416, 494, 921, 921, 422, 622, 296, 770, 96, 958, 913, 503, 673, 753, 766, 457, 532, 762, 364, 308, 127, 746, 587, 62, 517, 816, 821, 475, 889, 407, 521, 399, 512, 903, 520, 619, 458, 674, 929, 495, 110, 424, 801, 357, 533, 978, 120, 868, 164, 574, 669, 54, 197, 211, 857, 183, 308, 60, 870, 174, 352, 265, 724, 69, 955, 833, 877, 683, 601, 311, 414, 746, 495, 503, 482, 491, 875, 506, 661, 652, 287, 392, 206, 326, 385, 786, 440, 31, 58, 370, 185, 491, 111, 948, 177, 69, 331, 918, 356, 201, 76, 951, 961, 859, 644, 99, 537, 142, 892, 947, 371, 187, 271, 407, 892, 862, 570, 482, 897, 946, 296, 486, 117, 30, 338, 685, 715, 744, 488, 740, 411, 371, 661, 265, 448, 891, 161, 352, 601, 164, 280, 617, 910, 914, 119, 764, 164, 727, 180, 912, 624, 536, 437, 248, 229, 419, 491, 664, 812, 725, 252, 698, 450, 327, 620, 562, 205, 847, 638, 63, 410, 551, 188, 825, 224, 54, 821, 938, 273, 870, 239, 918, 600, 575, 450, 827, 50, 935, 329, 704, 789, 352, 60, 656, 57, 458, 753, 955, 155, 491, 402, 235, 552, 865, 960, 592, 502, 465, 623, 397, 626, 591, 156, 321, 129, 74, 222, 819, 46, 306, 408, 117, 899, 757, 354, 723, 487, 359, 318, 228, 670, 200, 442, 506, 37, 85, 391, 937, 303, 254, 294, 279, 144, 794, 892, 761, 362, 110, 131, 585, 677, 377, 270, 394, 235, 514, 854, 150, 867, 783, 270, 454, 122, 459, 771, 825, 711, 165, 575, 255, 734, 473, 149, 893, 609, 273, 975, 561, 600, 302, 382, 320, 276, 265, 873, 203, 274, 668, 161, 439, 574, 82, 525, 761, 772, 233, 966, 92, 690, 524, 226, 430, 779, 828, 728, 397, 727, 155, 88, 819, 479, 962, 15, 746, 684, 648];

// Używane w zadaniu 6. i 13.
const days = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']; // Dni tygodnia są liczone od 0 więc można użyć pobierania przez index
const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia']; // Miesiące są liczone od 0 więc można użyć pobierania przez index
const imieniny = new Array(
	new Array(
		"Masława,Mieczysława,Mieszka",
		"Bazylego,Makarego,Narcyzy",
		"Arlety,Danuty,Lucjana",
		"Anieli,Elżbiety,Tytusa",
		"Edwarda,Hanny,Szymona",
		"Kacpra,Melchiora,Baltazara",
		"Juliana,Lucjana,Walentyny",
		"Artura,Rajmunda,Seweryny",
		"Adriana,Alicji,Teresy",
		"Ady,Jana,Wilhelma",
		"Feliksa,Honoraty,Marty",
		"Bernarda,Czesławy,Grety",
		"Bogumiła,Bogumiły,Weroniki",
		"Feliksa,Hilarego,Martyny",
		"Arnolda,Dory,Pawła",
		"Marcelego,Walerii,Włodzimierza",
		"Antoniego,Henryki,Mariana",
		"Beatrycze,Małgorzaty,Piotra",
		"Erwiny,Henryka,Mariusza",
		"Fabioli,Miły,Sebastiana",
		"Agnieszki,Jarosława,Nory",
		"Dominiki,Mateusza,Wincentego",
		"Fernandy,Jana,Rajmundy",
		"Felicji,Roberta,Sławy",
		"Miłosza,Pawła,Tatiany",
		"Lutosława,Normy,Pauliny",
		"Anieli,Juliana,Przemysława",
		"Agnieszki,Kariny,Lesława",
		"Franciszka,Konstancji,Salomei",
		"Martyny,Macieja,Teofila",
		"Joanny,Ksawerego,Luizy"
	),
	new Array(
		"Brygidy,Dobrogniewa,Ignacego",
		"Kornela,Marii,Mirosławy",
		"Błałeja,Joanny,Telimeny",
		"Andrzeja,Mariusza,Weroniki",
		"Agaty,Filipa,Justyniana",
		"Amandy,Bogdana,Doroty",
		"Ryszarda,Teodora,Wilhelminy",
		"Irminy,Piotra,Sylwii",
		"Bernarda,Eryki,Rajmunda",
		"Elwiry,Elizy,Jacka",
		"Bernadetty,Marii,Olgierda",
		"Czasława,Damiana,Normy",
		"Grzegorza,Lesława,Katarzyny",
		"Liliany,Walentyny,Walentego",
		"Arnolda,Jowity,Georginy",
		"Danuty,Daniela,Juliany",
		"Donata,Gizeli,łukasza",
		"Konstancji,Krystiana,Sylwany",
		"Bettiny,Konrada,Mirosława",
		"Anety,Lecha,Leona",
		"Eleonory,Lenki,Kiejstuta",
		"Małgorzaty,Marty,Nikifora",
		"Damiana,Romana,Romany",
		"Boguty,Bogusza,Macieja",
		"Almy,Cezarego,Jarosława",
		"Bogumiła,Eweliny,Mirosława",
		"Gagrieli,Liwii,Leonarda",
		"Ludomira,Makarego,Wiliany",
		"Lecha,Lutomira,Wiktora"
	),
	new Array(
		"Albina,Antoniny,Radosławy",
		"Halszki,Heleny,Karola",
		"Kingi,Maryna,Tycjana",
		"Adrianny,Kazimierza,Wacława",
		"Aurory,Fryderyka,Oliwii",
		"Jordana,Marcina,Rły",
		"Flicyty,Kajetana,Pauli",
		"Beaty,Juliana,Wincentego",
		"Dominika,Franciszki,Katarzyny",
		"Bołysławy,Cypriana,Marcelego",
		"Konstantego,Ludosława,Rozyny",
		"Grzegorza,Justyny,Jłzefiny",
		"Bołeny,Krystyny,Marka",
		"Dalii,Leona,Matyldy",
		"Delfiny,Longina,Ludwiki",
		"Izabeli,Henryka,Oktawii",
		"Reginy,Patryka,Zdyszka",
		"Edwarda,Narcyza,Zbysława",
		"Aleksandryny,Jłzefa,Nicety",
		"Joachima,Kiry,Maurycego",
		"Benedykta,Lubomiry,Lubomira",
		"Bogusława,Jagody,Katarzyny",
		"Feliksa,Konrada,Zbysławy",
		"Gabrieli,Marka,Seweryna",
		"Bolka,Cezaryny,Marioli",
		"Dory,Olgi,Teodora",
		"Ernesta,Jana,Marka",
		"Anieli,Kasrota,Soni",
		"Marka,Wiktoryny,Zenona",
		"Amelii,Dobromira,Leonarda",
		"Balbiny,Kamila,Kornelii"
	),
	new Array(
		"Chryzamtyny,Grałyny,Zygmunta",
		"Franciszka,Malwiny,Władysława",
		"Pankracego,Renaty,Ryszarda",
		"Benedykta,Izodory,Wacławy",
		"Ireny,Kleofasa,Wincentego",
		"Ady,Celestyny,Ireneusza",
		"Donata,Herminy,Rufina",
		"Amadeusza,Cezaryny,Juliany",
		"Mai,Marcelego,Wadima",
		"Borysławy,makarego,Michała",
		"Filipa,Izoldy,Leona",
		"Juliusza,Lubosława,Wiktoryny",
		"Artemona,Justyny,Przemysławy",
		"Bernarda,Martyny,Waleriana",
		"Adolfiny,Odetty,Wacława",
		"Bernarda,Biruty,Erwina",
		"Anicety,Klary,Rudolfina",
		"Apoloniusza,Bogusławy,Gołcisławy",
		"Alfa,Leonii,Tytusa",
		"Agnieszki,Amalii,Czecha",
		"Jarosława,Konrada,Selmy",
		"Łukasza,Kai,Nastazji",
		"Ilony,Jerzego,Wojciecha",
		"Bony,Horacji,Jerzego",
		"Jarosława,Marka,Wiki",
		"Marii,Marzeny,Ryszarda",
		"Sergiusza,Teofila,Zyty",
		"Bogny,Walerii,Witalisa",
		"Hugona,Piotra,Roberty",
		"Balladyny,Lilli,Mariana"
	),
	new Array(
		"Jłzefa,Lubomira,Ramony",
		"Longiny,Toli,Zygmunta",
		"Jaropełka,Marii,Niny",
		"Floriana,Michała,Moniki",
		"Irydy,Tamary,Waldemara",
		"Beniny,Filipa,Judyty",
		"Augusta,Gizeli,Ludomiry",
		"Kornela,Lizy,Stanisława",
		"Grzegorza,Karoliny,Karola",
		"Antoniny,Izydory,Jana",
		"Igi,Mamerta,Miry",
		"Dominika,Imeldy,Pankracego",
		"Agnieszki,Magdaleny,Serwacego",
		"Bonifacego,Julity,Macieja",
		"Dionizego,Nadziei,Zofii",
		"Andrzeja,Jędrzeja,Małgorzaty",
		"Brunony,Sławomira,Wery",
		"Alicji,Edwina,Eryka",
		"Celestyny,Iwony,Piotra",
		"Bazylego,Bernardyna,Krystyny",
		"Jana,Moniki,Wiktora",
		"Emila,Neleny,Romy",
		"Leoncjusza,Michała,Renaty",
		"Joanny,Zdenka,Zuzanny",
		"Borysa,Magdy,Marii-Magdaleny",
		"Eweliny,Jana,Pawła",
		"Amandy,Jana,Juliana",
		"Augustyna,Ingi,Jaromira",
		"Benity,Maksymiliana,Teodozji",
		"Ferdynanda,Gryzeldy,Zyndrama",
		"Anieli,Feliksa,Kamili"
	),
	new Array(
		"Gracji,Jakuba,Konrada",
		"Erazma,Marianny,Marzeny",
		"Anatola,Leszka,Tamary",
		"Christy,Helgi,Karola",
		"Bonifacego,Kiry,Waltera",
		"Laury,Laurentego,Nory",
		"Ariadny,Jarosława,Roberta",
		"Ady,Celii,Medarda",
		"Anny-Marii,Felicjana,Sławoja",
		"Bogumiła,Diany,Małgorzaty",
		"Barnaby,Benedykta,Flory",
		"Gwidona,Leonii,Niny",
		"Antoniego,Gracji,Lucjana",
		"Bazylego,Elizy,Justyny",
		"Jolanty,Lotara,Wita",
		"Aliny,Anety,Benona",
		"Laury,Leszka,Marcjana",
		"Elłbiety,Marka,Pauli",
		"Gerwazego,Protazego,Sylwii",
		"Bogny,Rafaeli,Rafała",
		"Alicji,Alojzego,Rudolfa",
		"Pauliny,Sabiny,Tomasza",
		"Albina,Wandy,Zenona",
		"Danuty,Jana,Janiny",
		"łucji,Witolda,Wilhelma",
		"Jana,Pauliny,Rudolfiny",
		"Cypriana,Emanueli,Władysława",
		"Florentyny,Ligii,Leona",
		"Pawła,Piotra,Salomei",
		"Arnolda,Emiliany,Lucyny"
	),
	new Array(
		"Bogusza,Haliny,Mariana",
		"Kariny,Serafiny,Urbana",
		"Anatola,Jacka,Mirosławy",
		"Aureli,Malwiny,Zygfryda",
		"Antoniego,Bartłomieja,Karoliny",
		"Dominiki,Jaropełka,łucji",
		"Estery,Kiry,Rudolfa",
		"Arnolda,Edgara,Elłbiety",
		"Hieronima,Palomy,Weroniki",
		"Filipa,Sylwany,Witalisa",
		"Benedykta,Kariny,Olgi",
		"Brunona,Jana,Wery",
		"Danieli,Irwina,Małgorzaty",
		"Kamili,Kamila,Marcelego",
		"Henryka,Igi,Włodzimierza",
		"Eustachego,Mariki,Mirelli",
		"Aleksego,Bogdana,Martyny",
		"Kamila,Karoliny,Roberta",
		"Alfreny,Rufina,Wincentego",
		"Fryderyka,Małgorzaty,Seweryny",
		"Danieli,Wawrzyłca,Wiktora",
		"Magdaleny,Mileny,Wawrzyłca",
		"Sławy,Sławosza,łelisławy",
		"Kingi,Krystyna,Michaliny",
		"jakuba,Krzysztofa,Walentyny",
		"Anny,Mirosławy,Joachima",
		"Aureliusza,Natalii,Rudolfa",
		"Ady,Wiwiany,Sylwiusza",
		"Marty,Konstantego,Olafa",
		"Julity,Ludmiły,Zdobysława",
		"Ignacego,Lodomiry,Romana"
	),
	new Array(
		"Jarosława,Justyny,Nadziei",
		"Gustawa,Kariny,Stefana",
		"Augustyna,Kamelii,Lidii",
		"Dominiki,Dominika,Protazego",
		"Emila,Karoliny,Kary",
		"Jakuba,Sławy,Wincentego",
		"Donaty,Olechny,Kajetana",
		"Izy,Rajmunda,Seweryna",
		"Klary,Romana,Rozyny",
		"Bianki,Borysa,Wawrzyłca",
		"Luizy,Włodzmierza,Zuzanny",
		"Hilarii,Juliana,Lecha",
		"Elwiry,Hipolita,Radosławy",
		"Alfreda,Maksymiliana,Selmy",
		"Marii,Napoleona,Stelli",
		"Joachima,Nory,Stefana",
		"Anity,Elizy,Mirona",
		"Bogusława,Bronisława,Ilony",
		"Emilii,Julinana,Konstancji",
		"Bernarda,Sabiny,Samuela",
		"Franciszka,Kazimiery,Ruty",
		"Cezarego,Marii,Zygfryda",
		"Apolinarego,Miły,Rły",
		"Bartosza,Jerzego,Maliny",
		"Belii,Ludwika,Luizy",
		"Ireneusza,Konstantego,Marii",
		"Cezarego,Małgorzaty,Moniki",
		"Adeliny,Erazma,Sobiesława",
		"Beaty,Racibora,Sabiny",
		"Benona,Jowity,Szczłsnego",
		"Cyrusa,Izabeli,Rajmundy"
	),
	new Array(
		"Belindy,Bronisza,Idziego",
		"Dionizy,Izy,Juliana",
		"Joachima,Liliany,Szymona",
		"Dalii,Idy,Rocha",
		"Doroty,Justyna,Wawrzyłca",
		"Beaty,Eugeniusza,Lidy",
		"Reginy,Marka,Melchiora",
		"Czcibora,Marii,Radosława",
		"Aldony,Jakuba,Sergiusza",
		"Eligii,Irmy,łukasza",
		"Dagny,Jacka,Prota",
		"Amadeusza,Gwidy,Sylwiny",
		"Apolinarego,Eugenii,Lubomira",
		"Bernarda,Mony,Roksany",
		"Albina,Lolity,Ronalda",
		"Jagienki,Kamili,Korneliusza",
		"Franciszka,Lamberty,Narcyza",
		"Ireny,Irminy,Stanisława",
		"Januarego,Konstancji,Leopolda",
		"Eustachego,Faustyny,Renaty",
		"Darii,Mateusza,Wawrzyłca",
		"Maury,Milany,Tomasza",
		"Bogusława,Liwiusza,Tekli",
		"Dory,Gerarda,Maryny",
		"Aureli,Kamila,Kleofasa",
		"Cypriana,Justyny,łucji",
		"Damiana,Mirabeli,Wincentego",
		"Libuszy,Wacławy,Wacława",
		"Michaliny,Michała,Rafała",
		"Geraldy,Honoriusza,Wery"
	),
	new Array(
		"Heloizy,Igora,Remigiusza",
		"Racheli,Sławy,Teofila",
		"Bogumiła,Gerarda,Jłzefy",
		"Edwina,Rosławy,Rozalii",
		"Flawii,Justyna,Rajmunda",
		"Artura,Fryderyki,Petry",
		"Krystyna,Marii,Marka",
		"Brygidy,Loreny,Marcina",
		"Arnolda,Ludwika,Sybili",
		"Franciszka,Loretty,Poli",
		"Aldony,Brunona,Emila",
		"Krystyny,Maksa,Serafiny",
		"Edwarda,Geraldyny,Teofila",
		"Alany,Damiana,Liwii",
		"Jadwigi,Leonarda,Teresy",
		"Ambrołego,Florentyny,Gawła",
		"Antonii,Ignacego,Wiktora",
		"Hanny,Klementyny,łukasza",
		"Michaliny,Michała,Piotra",
		"Ireny,Kleopatry,Witalisa",
		"Celiny,Hilarego,Janusza",
		"Haliszki,Lody,Przybysława",
		"Edwarda,Marleny,Seweryna",
		"Arety,Marty,Marcina",
		"Ingi,Maurycego,Sambora",
		"Ewarysta,Lucyny,Lutosławy",
		"Iwony,Noemi,Szymona",
		"Narcyza,Serafina,Wioletty",
		"Angeli,Przemysława,Zenobii",
		"Augustyny,łukasza,Urbana",
		"Krzysztofa,Augusta,Saturnina"
	),
	new Array(
		"Konrada,Seweryny,Wiktoryny",
		"Bohdany,Henryka,Tobiasza",
		"Huberta,Miły,Sylwii",
		"Albertyny,Karola,Olgierda",
		"Balladyny,Elłbiety,Sławomira",
		"Arletty,Feliksa,Leonarda",
		"Antoniego,Kaliny,Przemiły",
		"Klaudii,Seweryna,Wiktoriusza",
		"Anatolii,Gracji,Teodora",
		"Leny,Lubomira,Natalii",
		"Bartłomieja,Gertrudy,Marcina",
		"Konrada,Renaty,Witolda",
		"Arkadii,Krystyna,Stanisławy",
		"Emila,Laury,Rogera",
		"Amielii,Idalii,Leopolda",
		"Edmunda,Marii,Marka",
		"Grzegorza,Salomei,Walerii",
		"Klaudyny,Romana,Tomasza",
		"Elłbiety,Faustyny,Pawła",
		"Anatola,Edyty,Rafała",
		"Janusza,Marii,Reginy",
		"Cecylii,Jonatana,Marka",
		"Adeli,Felicyty,Klemensa",
		"Emmy,Flory,Romana",
		"Elłbiety,Katarzyny,Klemensa",
		"Leona,Leonarda,Lesławy",
		"Franciszka,Kseni,Maksymiliana",
		"Jakuba,Stefana,Romy",
		"Błałeja,Margerity,Saturnina",
		"Andrzeja,Maury,Ondraszka"
	),
	new Array(
		"Blanki,Edmunda,Eligiusza",
		"Balbiny,Ksawerego,Pauliny",
		"Hilarego,Franciszki,Ksawery",
		"Barbary,Hieronima,Krystiana",
		"Kryspiny,Norberta,Sabiny",
		"Dionizji,Leontyny,Mikołaja",
		"Agaty,Dalii,Sobiesława",
		"Delfiny,Marii,Wirginiusza",
		"Anety,Leokadii,Wiesława",
		"Danieli,Bohdana,Julii",
		"Biny,Damazego,Waldemara",
		"Ady,Aleksandra,Dagmary",
		"Dalidy,Juliusza,łucji",
		"Alfreda,Izydora,Zoriny",
		"Celiny,Ireneusza,Niny",
		"Albiny,Sebastiana,Zdzisławy",
		"Jolanty,Łukasza,Olimpii",
		"Bogusława,Gracjana,Laury",
		"Beniaminy,Dariusza,Gabrieli",
		"Bogumiły,Dominika,Zefiryna",
		"Honoraty,Seweryny,Tomasza",
		"Bołeny,Drogomira,Zenona",
		"Dagny,Sławomiry,Wiktora",
		"Adama,Ewy,Irminy",
		"Anety,Glorii,Piotra",
		"Dionizego,Kaliksta,Szczepana",
		"Fabioli,Jana,Żanety",
		"Antoniusza,Cezarego,Teofilii",
		"Dawida,Dionizy,Tomasza",
		"Eugeniusza,Katarzyny,Sabiny",
		"Mariusza,Melanii,Sylwestra"
	)
); // Skopiowane z pliku imiona_array.txt

// Zadania
function zadanie1() {
    const text = getText(1);
    const i = [...text].filter((char) => samogloski.includes(char)).length;
    return `${i} samogłosek`;
}

function zadanie2() {
    const text = getText('2_1');
    const text_2 = getText('2_2');
    return text.includes(text_2) ? 'Znajduje się' : 'Nie znajduje się';
}

function zadanie3() {
    return text.replaceAll('amet', 'amet'.toUpperCase());
}

function zadanie4() {
    const array = [];
    let text_80 = '';

    text.split(' ').forEach((word) => {
        if ((text_80 + word + ' ').length >= 80) {
            array.push(text_80);
            text_80 = '';
        }
        text_80 += word + ' ';
    });

    if (text_80) {
        array.push(text_80);
    }

    return array.join('\n');
}

function zadanie5() {
    const min = 150;
    const max = 250;
    const chars = Math.floor(Math.random() * (max - min + 1) + min);
    return text.substr(0, chars);
}

function zadanie6() {
    const date = new Date();
    const day_week = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let day_year = 0; // Do obliczenia dnia roku postanowiłem wykorzystać podane imieniny do zadania 13.
    for (let i = 0; i < date.getMonth(); i++) {
        if (i === 1) { // luty
            if (year % 4 !== 0) { // Jeśli rok nie jest przestępny
                day_year += imieniny[i].length - 1;
                continue;
            }
        }
        day_year += imieniny[i].length;
    }
    day_year += day;

    return `Dzisiaj jest ${day_week}, ${day} ${month} ${year} roku. To jest ${day_year} dzień roku.`;
}

function zadanie7() {
    const date1 = new Date();
    date1.setDate(+document.getElementById('day_1').value);
    date1.setMonth(+document.getElementById('month_1').value);
    date1.setFullYear(+document.getElementById('year_1').value);

    const date2 = new Date();
    date2.setDate(+document.getElementById('day_2').value);
    date2.setMonth(+document.getElementById('month_2').value);
    date2.setFullYear(+document.getElementById('year_2').value);

    return formatDifference(date1, date2);
}

function zadanie8() {
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);

    return formatDifference(date1, date2);
}

function zadanie9() {
    const chars = 'qwertyuiopasdfghjklzxcvbnm1234567890.'.split('');
    const domain = '@testowa.pl';
    let mail = '';

    function getRandom(max, min = 0) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    for (let i = 0; i < getRandom(20, 10); i++) {
        mail += chars[getRandom(chars.length)];
    }

    return mail + domain;
}

function zadanie10() {
    const text = getText(10);
    return text.split('@')[1] || '';
}

function zadanie11() {
    const x = +getText(11);
    return Math.round((x ** 5 + x ** 3 - Math.sqrt(x)) * 100) / 100;
}

function zadanie12() {
    const sorted = liczby.sort((a, b) => a === b ? 0 : Math.max(a, b) === a ? 1 : -1);
    return `Najmniejsza: ${sorted[0]}, Suma: ${sorted.reduce((previous, current) => previous + current, 0)}`
}

function zadanie13() {
    const date = new Date();
    const day_week = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const imieniny_today = imieniny[date.getMonth()][day - 1];

    return `Dzisiaj jest: ${day_week}, ${day} ${month} ${year} roku. Imieniny: ${imieniny_today}.`;
}

// Pomocnicze
function getText(numer) { // Pobiera tekst od użytkownika
    return document.getElementById(`text_${numer}`).value;
}

function showResult(numer, text) { // Pokazuje podany tekst
    document.getElementById(`result_${numer}`).innerText = text;
}

function formatDifference(date1, date2) { // Funkcja pomocnicza do zadań 7. i 8.
    const difference = Math.abs(date1 - date2) / 1000 / 60 / 60 / 24;
    return `${difference} dni`;
}

// Listener do przycisków
for (let i = 1; i <= 13; i++) {
    document.getElementById(`submit_${i}`).addEventListener('click', () => showResult(i, window[`zadanie${i}`]()));
}