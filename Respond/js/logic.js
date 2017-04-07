window.addEventListener("resize", colHeight);

/**
 * All info for the publications are stored in this JSON Object
 * @type {*[]}
 */
publications = [
    {
        "id" : 0,
        "link" : "http://www.ncbi.nlm.nih.gov/pubmed/26826431",
        "paperName" : "Neuropharmacology. 2016 Jun; 105:351-60",
        "title" : "The effects of a 5-HT5A receptor antagonist in a ketamine-based rat model of cognitive dysfunction and the negative symptoms of schizophrenia.",
        "author" : "Nikiforuk A, Hołuj M, Kos T, Popik P",
        "mainpage" : false
    },
    {
        "id" : 1,
        "link" : "http://www.ncbi.nlm.nih.gov/pubmed/27192951",
        "paperName" : "J Child Psychol Psychiatry. 2016 Jun; 57(6):659-61",
        "title" : "Maturing insights into the genetic architecture of neurodevelopmental disorders - from common and rare variant interplay to precision psychiatry.",
        "author" : "Lesch KP",
        "mainpage" : false
    },
    {
        "id" : 2,
        "link" : "http://www.ncbi.nlm.nih.gov/pubmed/27263073",
        "paperName" : "Behav Brain Res. 2016 Sep 15; 311:354-67",
        "title" : "Fluoxetine normalizes the effects of prenatal maternal stress on depression- and anxiety-like behaviors in mouse dams and male offspring.",
        "author" : "Salari AA, Fatehi-Gharehlar L, Motayagheni N, Homberg JR",
        "mainpage" : false
    },
    {
        "id" : 3,
        "link" : "http://www.ncbi.nlm.nih.gov/pubmed/27435422",
        "paperName" : "Behav Brain Res. 2016 Oct 15; 313:214-8",
        "title" : "The combination of memantine and galantamine improves cognition in rats: The synergistic role of the α7 nicotinic acetylcholine and NMDA receptors.",
        "author" : "Nikiforuk A, Potasiewicz A, Kos T, Popik P",
        "mainpage" : false
    },
    {
        "id" : 4,
        "link" : "http://www.ncbi.nlm.nih.gov/pubmed/27208789",
        "paperName" : "Neuropharmacology. 2016 Oct; 109:96-111",
        "title" : "Perinatal reduction of functional serotonin transporters results in developmental delay.",
        "author" : "Kroeze Y, Dirven B, Janssen S, Kröhnke M, Barte RM, Middelman A, van Bokhoven H, Zhou H, Homberg JR",
        "mainpage" : false
    },
    {
        "id" : 5,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/26100147",
        "paperName" : "Eur Arch Psychiatry Clin Neurosci. 2016 Apr; 266(3):281-4",
        "title" : "Increased brain-derived neurotrophic factor (BDNF) protein concentrations in mice lacking brain serotonin.",
        "author" : "Kronenberg G, Mosienko V, Gertz K, Alenina N, Hellweg R, Klempin F",
        "mainpage" : false
    },
    {
        "id" : 6,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/27483345",
        "paperName" : "Dis Model Mech. 2016 Oct 1; 9(10):1147-1158",
        "title" : "The role of the dopamine D1 receptor in social cognition: studies using a novel genetic rat model.",
        "author" : "Homberg JR, Olivier JD, VandenBroeke M, Youn J, Ellenbroek AK, Karel P, Shan L, van Boxtel R, Ooms S, Balemans M, Langedijk J, Muller M, Vriend G, Cools AR, Cuppen E, Ellenbroek BA",
        "mainpage" : false
    },
    {
        "id" : 7,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/27693660",
        "paperName" : "Neurosci Lett. 2016 Oct 28; 633:246-251",
        "title" : "Increased adult neurogenesis in mice with a permanent overexpression of the postsynaptic 5-HT1A receptor.",
        "author" : "Noto B, Klempin F, Alenina N, Bader M, Fink H, Sander SE",
        "mainpage" : false
    },
    {
        "id" : 8,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/27877101",
        "paperName" : "Front Neurosci. 2016 Nov 8; 10:488",
        "title" : "From Molecules to the Clinic: Linking Schizophrenia and Metabolic Syndrome through Sphingolipids Metabolism.",
        "author" : "Castillo RI, Rojo LE, Henriquez-Henriquez M, Silva H, Maturana A, Villar MJ, Fuentes M, Gaspar PA",
        "mainpage" : false
    },
    {
        "id" : 9,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/26608830",
        "paperName" : "Brain Struct Funct. 2016 Nov; 221(8):4007-4025",
        "title" : "Multiscale single-cell analysis reveals unique phenotypes of raphe 5-HT neurons projecting to the forebrain.",
        "author" : "Fernandez SP, Cauli B, Cabezas C, Muzerelle A, Poncer JC, Gaspar P",
        "mainpage" : false
    },
    {
        "id" : 10,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/24510476",
        "paperName" : "J Atten Disord. 2016 Dec; 20(12):1056-1065",
        "title" : "Sex- and Subtype-Related Differences of Personality Disorders (Axis II) and Personality Traits in Persistent ADHD.",
        "author" : "Jacob CP, Gross-Lesch S, Reichert S, Geissler J, Jans T, Kittel-Schneider S, Nguyen TT, Romanos M, Reif A, Dempfle A, Lesch KP",
        "mainpage" : false
    },
    {
        "id" : 11,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/27461084",
        "paperName" : "Neuropsychopharmacology. 2017 Jan; 42(2):512-523",
        "title" : "Constitutive and Acquired Serotonin Deficiency Alters Memory and Hippocampal Synaptic Plasticity.",
        "author" : "Fernandez SP, Muzerelle A, Scotto-Lomassese S, Barik J, Gruart A, Delgado-García JM, Gaspar P",
        "mainpage" : false
    },
    {
        "id" : 12,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/28108491",
        "paperName" : "Cereb Cortex. 2017 Jan 19",
        "title" : "Transcriptome Analysis Identifies Multifaceted Regulatory Mechanisms Dictating a Genetic Switch from Neuronal Network Establishment to Maintenance During Postnatal Prefrontal Cortex Development.",
        "author" : "Kroeze Y, Oti M, van Beusekom E, Cooijmans RH, van Bokhoven H, Kolk SM, Homberg JR, Zhou H",
        "mainpage" : false
    },
    {
        "id" : 13,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/27684102",
        "paperName" : "Expert Rev Neurother. 2017 Feb; 17(2):203-212",
        "title" : "Psilocybin for treating substance use disorders?",
        "author" : "de Veen BT, Schellekens AF, Verheij MM, Homberg JR",
        "mainpage" : false
    },
    {
        "id" : 14,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/28197551",
        "paperName" : "eNeuro. 2017 Feb 6;4(1)",
        "title" : "EphrinA5 Signaling Is Required for the Distinctive Targeting of Raphe Serotonin Neurons in the Forebrain.",
        "author" : "Teng T, Gaillard A, Muzerelle A, Gaspar P",
        "mainpage" : true
    },
    {
        "id" : 15,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/28182397",
        "paperName" : "ACS Chem Neurosci. 2017 Feb 9",
        "title" : "Comeback of the Rat in Biomedical Research.",
        "author" : "Homberg JR, Wöhr M, Alenina N",
        "mainpage" : true
    },
    {
        "id" : 16,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/28017852",
        "paperName" : "Behav Brain Res. 2017 Mar 15; 321:106-112",
        "title" : "Anxiety and risk assessment-related traits in a rat model of Spinocerebellar ataxia type 17.",
        "author" : "Kyriakou EI, Manfré G, Spadaro JA, Nguyen HP, Harst JE, Homberg JR",
        "mainpage" : false
    },
    {
        "id" : 17,
        "link" : "https://www.ncbi.nlm.nih.gov/pubmed/28375615",
        "paperName" : "ACS Chem Neurosci. 2017 Apr 4",
        "title" : "Specific Connectivity and Unique Molecular Identity of MET Receptor Tyrosine Kinase-Expressing Serotonergic Neurons in the Caudal Dorsal Raphe Nuclei.",
        "author" : "Kast RJ, Wu HH, Williams P, Gaspar P, Levitt P",
        "mainpage" : false
    }
];

/**
 * info which publication container needs what kind of clearfix behind it
 * Note: numbers given here are publication id
 * @type {number[]}
 */
var mdSmClearfix = [1, 3, 7, 9, 13];
var lgClearfix = [2, 8, 14];
var lgMdSmClearfix = [5, 11];


function colHeight() {
    if(window.innerWidth < 992){
        $(".col4").css("height", "auto")
    }else if(window.innerWidth > 993 && $(".hiddenLinks").css("display") == "none"){
        $(".col4").css("height", "450px")
    }
}

function initialize(){

    var $logo1 = $(".qLUpLeft");
    var $logo2 = $(".qLUpRight");
    var $logo3 = $(".qLLowLeft");
    var $logo4 = $(".qLLowRight");
    var articleSpace = $('#mainArticles');


    $logo1.hover(function () {
        $logo2.hide();
        $logo3.hide();
        $logo4.hide();
    }, function(){
        $logo2.fadeTo("fast", 1);
        $logo3.fadeTo("fast", 1);
        $logo4.fadeTo("fast", 1);
    });

    $logo2.hover(function () {
        $logo1.hide();
        $logo3.hide();
        $logo4.hide();
    }, function(){
        $logo1.fadeTo("fast", 1);
        $logo3.fadeTo("fast", 1);
        $logo4.fadeTo("fast", 1);
    });

    $logo3.hover(function () {
        $logo1.hide();
        $logo2.hide();
        $logo4.hide();
    }, function(){
        $logo1.fadeTo("fast", 1);
        $logo2.fadeTo("fast", 1);
        $logo4.fadeTo("fast", 1);
    });

    $logo4.hover(function () {
        $logo1.hide();
        $logo2.hide();
        $logo3.hide();
    }, function(){
        $logo1.fadeTo("fast", 1);
        $logo2.fadeTo("fast", 1);
        $logo3.fadeTo("fast", 1);
    });

    $(".moreLinks").click(function () {

        $header = $(this);
        $content = $(".hiddenLinks");
        $glyph = $(".glyphicon");
        $col = $(".col4");

        if(window.innerWidth >= 992) {
            function heightAdapt() {
                if ($col.css("height") == "450px") {
                    $col.css("height", "auto");
                } else {
                    $col.css("height", "450px");
                }
            }

            heightAdapt();
        }

        $content.slideToggle(350, function () {

            if($content.css("display") == "block"){
                $("div.glyphicon").replaceWith("<div class='textColorShadowTrans glyphicon glyphicon-arrow-up'></div>");
            }else{
                $("div.glyphicon").replaceWith("<div class='textColorShadowTrans glyphicon glyphicon-arrow-down'></div>");

            }

        });
    });

    for(var i = 0; i < publications.length; i++){
        var author = publications[i].author;
        var cut = author.indexOf(",");
        author = author.slice(0, cut) + ' et al.';
        if(publications[i].mainpage === true){
            articleSpace.append('<div class="article">' +
                '                   <a class="textColorTrans" href='+publications[i].link+'>' +
                '                       <p class="articleHead">'+author+'</p>' +
                '                       <hr class="articleLine">' +
                '                       <p class="articleTitle">'+publications[i].title+'</p>' +
                '                       <hr class="articleLine">' +
                '                       <p class="paperName">'+publications[i].paperName+'</p>' +
                '                   </a>' +
                '               </div>');
        }        
    }
}

/**
 * This function calls the buildSite function for every object in the JSON object "publications"
 *
 * The search is also handled here. If something is entered into the input field "#searchBox" it will delete all
 * publication div containers and call the "buildSite" function, which then adds the objects, that contain the
 * given string in their title, paperName or author -not case sensitive-
 */
function pubBuild(){
    for(var i = 0; i < publications.length; i++){
        buildSite(i, -1);
    }

    $('#searchBox').on('input', function(){
        $('.pub').remove();
        $('.clearfix').remove();
        var count = 0;
        var input = $('#searchBox').val().toLowerCase();
        for(var j = 0; j < publications.length; j++){
            if(publications[j].paperName.toLowerCase().indexOf(input) != -1 || publications[j].title.toLowerCase().indexOf(input) != -1 || publications[j].author.toLowerCase().indexOf(input) != -1){
                buildSite(j, count);
                count++;
            }
        }
    });
}

/**
 * This function adds all publications to the html document. The publications are stored in the JSON Object "publications".
 * For every Object in "publications" it will add a div container with the given information.
 * If a clearfix is needed (info for that must be gathered manually, see mdSmClearfix, lgClearfix, lgMdSmClearfix) it will add the correct one.
 *
 * @param index   = provides info about which is the current publication
 * @param counter = if the search is triggered, the clearfixes don't match to the indexes of the publications anymore
 *                  the counter variable provides the correct place for the clearfix (set to -1 if not needed)
 */
function buildSite(index, counter){
    if(counter === -1){
        counter = index;
    }
    var appendix = $('#appendix');
    appendix.append('<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-centered pub">' +
        '               <div class="publication">' +
        '                   <a class="textColorTrans" href='+publications[index].link+'>' +
        '                       <p class="paperName2">'+publications[index].paperName+'</p>' +
        '                       <hr class="publicationLine">' +
        '                       <p class="publicationTitle">'+publications[index].title+'</p>' +
        '                       <hr class="publicationLine">' +
        '                       <p class="publicationHead">'+publications[index].author+'</p>' +
        '                   </a>' +
        '               </div>' +
        '           </div>');
    if($.inArray(counter, mdSmClearfix) !== -1){
        appendix.append('<div class="clearfix visible-md visible-sm"></div>')
    }else if($.inArray(counter, lgClearfix) !== -1){
        appendix.append('<div class="clearfix visible-lg"></div>')
    }else if($.inArray(counter, lgMdSmClearfix) !== -1){
        appendix.append('<div class="clearfix visible-lg visible-md visible-sm"></div>')
    }
}
