const words = [
    { word: "AARON", pronunciation: "AIR-uhn", definition: "The brother of Moses and the first high priest of Israel.", french: "Le frère de Moïse et le premier grand prêtre d'Israël." },
    { word: "ABBA", pronunciation: "AHB-bah", definition: "An Aramaic term meaning 'Father,' expressing intimacy and respect.", french: "Un terme araméen signifiant 'Père', exprimant intimité et respect." },
    { word: "ABEL", pronunciation: "AY-buhl", definition: "The second son of Adam and Eve, killed by his brother Cain.", french: "Le deuxième fils d'Adam et Eve, tué par son frère Caïn." },
    { word: "ABOMINATION", pronunciation: "uh-bom-uh-NAY-shun", definition: "Something detestable, especially in the context of idolatry or moral corruption.", french: "Quelque chose de détestable, surtout dans le contexte de l'idolâtrie ou de la corruption morale." },
    { word: "ABRAHAM", pronunciation: "AB-rah-ham", definition: "The father of the Israelite nation, with whom God made a covenant.", french: "Le père de la nation israélite, avec qui Dieu a fait une alliance." },
    { word: "ABYSS", pronunciation: "uh-BIS", definition: "A deep or bottomless pit, often associated with the abode of demons.", french: "Un puits profond ou sans fond, souvent associé au séjour des démons." },
    { word: "ADONAI", pronunciation: "AD-oh-nye", definition: "A name for God, emphasizing His lordship and authority.", french: "Un nom pour Dieu, soulignant sa seigneurie et son autorité." },
    { word: "ADULTERY", pronunciation: "uh-DUL-tuh-ree", definition: "Sexual relations outside of marriage, condemned in the Ten Commandments.", french: "Relations sexuelles en dehors du mariage, condamnées dans les Dix Commandements." },
    { word: "ALABASTER", pronunciation: "AL-uh-bas-ter", definition: "A fine-grained stone used in the Bible for making containers for precious ointments.", french: "Une pierre à grain fin utilisée dans la Bible pour fabriquer des récipients pour des onguents précieux." },
    { word: "ALTAR", pronunciation: "AHL-ter", definition: "A structure for offering sacrifices to God, central to worship in the Old Testament.", french: "Une structure pour offrir des sacrifices à Dieu, centrale au culte dans l'Ancien Testament." },
    { word: "AMEN", pronunciation: "ah-MEN", definition: "A word expressing agreement, often used at the end of prayers.", french: "Un mot exprimant l'accord, souvent utilisé à la fin des prières." },
    { word: "AMOS", pronunciation: "AY-muhs", definition: "A prophet who warned of God's judgment on Israel and the surrounding nations.", french: "Un prophète qui a averti du jugement de Dieu sur Israël et les nations environnantes." },
    { word: "ANGEL", pronunciation: "AYN-juhl", definition: "A spiritual being who serves as a messenger of God.", french: "Un être spirituel qui sert de messager de Dieu." },
    { word: "ANOINT", pronunciation: "uh-NOYNT", definition: "To apply oil to someone as a sign of consecration or blessing.", french: "Appliquer de l'huile à quelqu'un comme signe de consécration ou de bénédiction." },
    { word: "ANTICHRIST", pronunciation: "AN-ti-KRYST", definition: "A figure who opposes Christ, particularly in eschatological contexts.", french: "Une figure qui s'oppose au Christ, en particulier dans des contextes eschatologiques." },
    { word: "APOSTLE", pronunciation: "uh-POS-uhl", definition: "One of the original 12 disciples chosen by Jesus, or a person sent on a mission.", french: "Un des 12 disciples originaux choisis par Jésus, ou une personne envoyée en mission." },
    { word: "ARK", pronunciation: "ARK", definition: "A large boat built by Noah to survive the flood, or the Ark of the Covenant, a sacred chest.", french: "Un grand bateau construit par Noé pour survivre au déluge, ou l'Arche de l'Alliance, un coffre sacré." },
    { word: "ASCENSION", pronunciation: "uh-SEN-shun", definition: "The event in which Jesus was taken up to heaven after His resurrection.", french: "L'événement où Jésus a été enlevé au ciel après sa résurrection." },
    { word: "ASHES", pronunciation: "ASH-iz", definition: "Symbolic of mourning, repentance, and mortality.", french: "Symbolique de deuil, de repentance et de mortalité." },
    { word: "ATONEMENT", pronunciation: "uh-TONE-ment", definition: "The reconciliation between God and humanity through Christ's sacrifice.", french: "La réconciliation entre Dieu et l'humanité par le sacrifice du Christ." },
    { word: "AZAZEL", pronunciation: "uh-ZAY-zuhl", definition: "A term associated with the scapegoat ritual in Leviticus 16.", french: "Un terme associé au rituel du bouc émissaire dans Lévitique 16." },
    { word: "BAAL", pronunciation: "BAH-uhl", definition: "A Canaanite god often worshiped in opposition to Yahweh.", french: "Un dieu canaanite souvent adoré en opposition à Yahweh." },
    { word: "BABEL", pronunciation: "BAY-buhl", definition: "The city where God confused human language, resulting in the dispersion of people.", french: "La ville où Dieu a confondu le langage humain, entraînant la dispersion des peuples." },
    { word: "BABYLON", pronunciation: "BAB-ih-lon", definition: "A powerful empire that conquered Judah, often symbolizing worldly power and corruption.", french: "Un empire puissant qui a conquis Juda, symbolisant souvent le pouvoir et la corruption mondains." },
    { word: "BAPTISM", pronunciation: "BAP-tiz-um", definition: "A Christian sacrament of initiation involving immersion in or sprinkling with water.", french: "Un sacrement chrétien d'initiation impliquant l'immersion dans ou l'aspersion d'eau." },
    { word: "BARNABAS", pronunciation: "BAR-nuh-buhs", definition: "An early Christian missionary and companion of Paul.", french: "Un missionnaire chrétien précoce et compagnon de Paul." },
    { word: "BEATITUDES", pronunciation: "bee-uh-TID-yoodz", definition: "A series of blessings pronounced by Jesus in the Sermon on the Mount.", french: "Une série de bénédictions prononcées par Jésus dans le Sermon sur la Montagne." },
    { word: "BEELZEBUB", pronunciation: "bee-EL-zuh-bub", definition: "A name used for Satan, meaning 'lord of the flies.'", french: "Un nom utilisé pour Satan, signifiant 'seigneur des mouches.'" },
    { word: "BETHLEHEM", pronunciation: "BETH-luh-hem", definition: "The birthplace of Jesus, located in Judea.", french: "Le lieu de naissance de Jésus, situé en Judée." },
    { word: "BLASPHEMY", pronunciation: "BLAS-fuh-mee", definition: "The act of showing disrespect or lack of reverence for God.", french: "L'acte de montrer du mépris ou un manque de révérence envers Dieu." },
    { word: "BLESSING", pronunciation: "BLES-ing", definition: "A prayer or act invoking divine favor and protection.", french: "Une prière ou un acte invoquant la faveur divine et la protection." },
    { word: "BOAZ", pronunciation: "BOH-az", definition: "A kinsman of Naomi who married Ruth, becoming an ancestor of David.", french: "Un parent de Naomi qui a épousé Ruth, devenant un ancêtre de David." },
    { word: "BREAD", pronunciation: "BRED", definition: "A staple food often used symbolically for sustenance and spiritual nourishment.", french: "Un aliment de base souvent utilisé symboliquement pour la subsistance et la nourriture spirituelle." },
    { word: "BRETHREN", pronunciation: "BRETH-ren", definition: "Brothers, often used to refer to fellow believers.", french: "Frères, souvent utilisés pour désigner des croyants." },
    { word: "BRIDE", pronunciation: "BRYD", definition: "A metaphor for the church as the bride of Christ.", french: "Une métaphore pour l'église en tant qu'épouse du Christ." },
    { word: "BURNT OFFERING", pronunciation: "BURNT OF-er-ing", definition: "A type of sacrifice in which the entire offering is consumed by fire, symbolizing total dedication to God.", french: "Un type de sacrifice dans lequel l'ensemble de l'offrande est consumé par le feu, symbolisant la totale dévotion à Dieu." },
    { word: "CAIN", pronunciation: "KAYN", definition: "The first son of Adam and Eve, who killed his brother Abel.", french: "Le premier fils d'Adam et Eve, qui a tué son frère Abel." },
    { word: "CALVARY", pronunciation: "KAL-vuh-ree", definition: "The site outside Jerusalem where Jesus was crucified, also known as Golgotha.", french: "Le site en dehors de Jérusalem où Jésus a été crucifié, également connu sous le nom de Golgotha." },
    { word: "CANAAN", pronunciation: "KAY-nuhn", definition: "The land promised to Abraham's descendants, later known as Israel.", french: "La terre promise aux descendants d'Abraham, plus tard connue sous le nom d'Israël." },
    { word: "CENSUS", pronunciation: "SEN-suhs", definition: "The counting of a population, significant in several biblical narratives.", french: "Le comptage d'une population, significatif dans plusieurs récits bibliques." },
    { word: "CHERUBIM", pronunciation: "KER-uh-bim", definition: "Angelic beings who serve as guardians of God's presence.", french: "Des êtres angéliques qui servent de gardiens de la présence de Dieu." },
    { word: "CHRIST", pronunciation: "KRAYST", definition: "The Greek term for 'Messiah,' meaning 'anointed one.'", french: "Le terme grec pour 'Messie', signifiant 'oint'." },
    { word: "CHURCH", pronunciation: "CHURCH", definition: "The assembly of believers in Jesus Christ, often referred to as the body of Christ.", french: "L'assemblée des croyants en Jésus-Christ, souvent appelée le corps du Christ." },
    { word: "COVENANT", pronunciation: "KUV-uh-nuhnt", definition: "A solemn agreement between God and His people, central to biblical theology.", french: "Un accord solennel entre Dieu et Son peuple, central à la théologie biblique." },
    { word: "CRUCIFIXION", pronunciation: "KROO-sih-fik-shun", definition: "The Roman method of execution by which Jesus was put to death.", french: "La méthode d'exécution romaine par laquelle Jésus a été mis à mort." },
    { word: "CUP", pronunciation: "KUP", definition: "A vessel for drinking, often symbolic of God's wrath or blessing.", french: "Un récipient pour boire, souvent symbolique de la colère ou de la bénédiction de Dieu." },
    { word: "DANIEL", pronunciation: "DAN-yuhl", definition: "A prophet known for his faithfulness in exile and his apocalyptic visions.", french: "Un prophète connu pour sa fidélité en exil et ses visions apocalyptiques." },
    { word: "DAVID", pronunciation: "DAY-vid", definition: "The second king of Israel, known for his psalms and his covenant with God.", french: "Le deuxième roi d'Israël, connu pour ses psaumes et son alliance avec Dieu." },
    { word: "DAY OF THE LORD", pronunciation: "DAY uhv thuh LORD", definition: "A term used for God's future intervention in history, particularly in judgment.", french: "Un terme utilisé pour l'intervention future de Dieu dans l'histoire, en particulier dans le jugement." },
    { word: "DEACON", pronunciation: "DEE-kuhn", definition: "A servant or minister in the early Christian church.", french: "Un serviteur ou ministre dans l'église chrétienne primitive." },
    { word: "DELILAH", pronunciation: "duh-LIE-luh", definition: "The woman who betrayed Samson to the Philistines.", french: "La femme qui a trahi Samson aux Philistins." },
    { word: "DEMON", pronunciation: "DEE-muhn", definition: "An evil spirit or fallen angel, often opposed to God's purposes.", french: "Un esprit maléfique ou un ange déchu, souvent opposé aux desseins de Dieu." },
    { word: "DISCIPLE", pronunciation: "dih-SY-puhl", definition: "A follower or student of Jesus.", french: "Un adepte ou élève de Jésus." },
    { word: "DOMINION", pronunciation: "duh-MIN-yuhn", definition: "Authority or control, often used in the context of God's reign.", french: "Autorité ou contrôle, souvent utilisé dans le contexte du règne de Dieu." },
    { word: "DOVE", pronunciation: "DUHV", definition: "A bird symbolizing peace, the Holy Spirit, or purity.", french: "Un oiseau symbolisant la paix, le Saint-Esprit ou la pureté." },
    { word: "DRAGON", pronunciation: "DRAG-uhn", definition: "A symbol of evil or Satan in apocalyptic literature.", french: "Un symbole du mal ou de Satan dans la littérature apocalyptique." },
    { word: "DREAM", pronunciation: "DREEM", definition: "A means by which God communicates with people, often with symbolic meaning.", french: "Un moyen par lequel Dieu communique avec les gens, souvent avec une signification symbolique." },
    { word: "EAGLE", pronunciation: "EE-guhl", definition: "A bird of prey, often used symbolically for strength or swift judgment.", french: "Un oiseau de proie, souvent utilisé symboliquement pour la force ou le jugement rapide." },
    { word: "EARTH", pronunciation: "URTH", definition: "The planet created by God, home to humanity.", french: "La planète créée par Dieu, foyer de l'humanité." },
    { word: "EDEN", pronunciation: "EE-duhn", definition: "The paradise where Adam and Eve lived before the Fall.", french: "Le paradis où Adam et Eve ont vécu avant la Chute." },
    { word: "ELIJAH", pronunciation: "ih-LIE-juh", definition: "A prophet who confronted Israel's apostasy and was taken to heaven in a whirlwind.", french: "Un prophète qui a confronté l'apostasie d'Israël et a été enlevé au ciel dans un tourbillon." },
    { word: "EMMANUEL", pronunciation: "ih-MAN-yoo-uhl", definition: "A name meaning 'God with us,' used for Jesus in prophecy.", french: "Un nom signifiant 'Dieu avec nous', utilisé pour Jésus dans la prophétie." },
    { word: "ENOCH", pronunciation: "EE-nuhk", definition: "A patriarch who walked with God and was taken to heaven without dying.", french: "Un patriarche qui a marché avec Dieu et a été enlevé au ciel sans mourir." },
    { word: "EPISTLE", pronunciation: "ih-PIS-tuhl", definition: "A letter, particularly one of the letters written by the apostles in the New Testament.", french: "Une lettre, en particulier l'une des lettres écrites par les apôtres dans le Nouveau Testament." },
    { word: "ESAU", pronunciation: "EE-saw", definition: "The brother of Jacob who sold his birthright for a meal.", french: "Le frère de Jacob qui a vendu son droit d'aînesse pour un repas." },
    { word: "EUCHARIST", pronunciation: "YOO-kuh-rist", definition: "The Christian ceremony commemorating the Last Supper, also known as Communion.", french: "La cérémonie chrétienne commémorant la Dernière Cène, également connue sous le nom de Communion." },
    { word: "EUNUCH", pronunciation: "YOO-nuhk", definition: "A man who has been castrated, often serving in royal courts.", french: "Un homme qui a été castré, souvent servant dans les cours royales." },
    { word: "EXODUS", pronunciation: "EK-suh-duhs", definition: "The departure of the Israelites from Egypt, led by Moses.", french: "Le départ des Israélites d'Égypte, dirigé par Moïse." },
    { word: "FAITH", pronunciation: "FAYTH", definition: "Trust in God and His promises, central to Christian belief.", french: "Confiance en Dieu et en ses promesses, centrale à la croyance chrétienne." },
    { word: "FAMINE", pronunciation: "FAM-in", definition: "A severe shortage of food, often seen as a judgment or test in the Bible.", french: "Une grave pénurie de nourriture, souvent considérée comme un jugement ou un test dans la Bible." },
    { word: "FEAST", pronunciation: "FEEST", definition: "A religious celebration, often involving a special meal.", french: "Une célébration religieuse, souvent impliquant un repas spécial." },
    
    { word: "FIG TREE", pronunciation: "FIG TREE", definition: "A common fruit tree in the Bible, often used symbolically.", french: "Un arbre fruitier commun dans la Bible, souvent utilisé symboliquement." },
    { word: "FIRE", pronunciation: "FIRE", definition: "A symbol of God's presence, judgment, or purification.", french: "Un symbole de la présence de Dieu, du jugement ou de la purification." },
    { word: "FIRSTBORN", pronunciation: "FIRST-born", definition: "The first child born to a family, often holding special status in biblical narratives.", french: "Le premier enfant né dans une famille, souvent ayant un statut spécial dans les récits bibliques." },
    { word: "FISH", pronunciation: "FISH", definition: "A creature of the sea, significant in Jesus' miracles and teachings.", french: "Une créature de la mer, significative dans les miracles et les enseignements de Jésus." },
    { word: "FLOOD", pronunciation: "FLOOD", definition: "The great deluge in Noah's time, symbolizing God's judgment on a sinful world.", french: "Le grand déluge du temps de Noé, symbolisant le jugement de Dieu sur un monde pécheur." },
    { word: "FORGIVENESS", pronunciation: "for-GIV-uh-ness", definition: "The act of pardoning someone for their sins or wrongs.", french: "L'acte de pardonner à quelqu'un pour ses péchés ou ses torts." },
    { word: "FORNICATION", pronunciation: "for-ni-KAY-shun", definition: "Sexual immorality, condemned in the Bible.", french: "Immoralité sexuelle, condamnée dans la Bible." },
    { word: "FRUIT", pronunciation: "FROOT", definition: "The product of a tree or plant, often used metaphorically for the results of a person's life or actions.", french: "Le produit d'un arbre ou d'une plante, souvent utilisé métaphoriquement pour les résultats de la vie ou des actions d'une personne." },
    { word: "GABRIEL", pronunciation: "GAY-bree-uhl", definition: "An archangel who served as a messenger to Daniel, Zechariah, and Mary.", french: "Un archange qui a servi de messager à Daniel, Zacharie et Marie." },
    { word: "GALILEE", pronunciation: "GAL-uh-lee", definition: "The region where Jesus spent much of His ministry.", french: "La région où Jésus a passé une grande partie de son ministère." },
    { word: "GARDEN OF GETHSEMANE", pronunciation: "GAR-den of geth-SEM-uh-nee", definition: "The place where Jesus prayed before His arrest.", french: "L'endroit où Jésus a prié avant son arrestation." },
    { word: "GEHENNA", pronunciation: "geh-HEN-uh", definition: "A valley outside Jerusalem, often associated with hell or final judgment.", french: "Une vallée à l'extérieur de Jérusalem, souvent associée à l'enfer ou au jugement final." },
    { word: "GENTILES", pronunciation: "JEN-tahyls", definition: "Non-Jewish people, often used in contrast to Israel.", french: "Des personnes non juives, souvent utilisées en contraste avec Israël." },
    { word: "GETHSEMANE", pronunciation: "geth-SEM-uh-nee", definition: "A garden where Jesus prayed before His arrest and crucifixion.", french: "Un jardin où Jésus a prié avant son arrestation et sa crucifixion." },
    { word: "GIANT", pronunciation: "JAI-uhnt", definition: "A person of extraordinary size, such as Goliath.", french: "Une personne de taille extraordinaire, comme Goliath." },
    { word: "GIFT", pronunciation: "GIFT", definition: "A present or offering, often used metaphorically for spiritual gifts given by God.", french: "Un cadeau ou une offrande, souvent utilisé métaphoriquement pour les dons spirituels donnés par Dieu." },
    { word: "GILEAD", pronunciation: "GIL-ee-uhd", definition: "A region known for its balm, often symbolizing healing.", french: "Une région connue pour son baume, symbolisant souvent la guérison." },
    { word: "GLEAN", pronunciation: "GLEEN", definition: "To gather leftover grain after a harvest, a practice allowed for the poor.", french: "Rassembler les grains restants après une récolte, une pratique autorisée pour les pauvres." },
    { word: "GLORY", pronunciation: "GLOR-ee", definition: "The majesty and honor of God, often revealed in His presence or works.", french: "La majesté et l'honneur de Dieu, souvent révélés dans sa présence ou ses œuvres." },
    { word: "HADES", pronunciation: "HAY-deez", definition: "The Greek term for the underworld or the place of the dead.", french: "Le terme grec pour le royaume des morts ou le lieu des morts." },
    { word: "HALLEL", pronunciation: "HAH-lel", definition: "A term referring to Psalms 113-118, sung during Jewish festivals.", french: "Un terme désignant les Psaumes 113-118, chantés lors des festivals juifs." },
    { word: "HALLELUJAH", pronunciation: "HAL-uh-LOO-yuh", definition: "A Hebrew expression meaning 'Praise the Lord.'", french: "Une expression hébraïque signifiant 'Louez le Seigneur.'" },
    { word: "HAM", pronunciation: "HAM", definition: "One of Noah's sons, traditionally associated with the peoples of Africa and parts of the Middle East.", french: "Un des fils de Noé, traditionnellement associé aux peuples d'Afrique et à certaines parties du Moyen-Orient." },
    { word: "HANNAH", pronunciation: "HAN-uh", definition: "The mother of Samuel, who prayed fervently for a child.", french: "La mère de Samuel, qui a prié ardemment pour un enfant." },
    { word: "HARVEST", pronunciation: "HAR-vuhst", definition: "The gathering of crops; often used metaphorically for gathering people for God's kingdom.", french: "La récolte des cultures ; souvent utilisé métaphoriquement pour rassembler des gens pour le royaume de Dieu." },
    { word: "HEALING", pronunciation: "HEE-ling", definition: "The process of making or becoming sound or healthy again, often through divine intervention.", french: "Le processus de guérison ou de retour à la santé, souvent par intervention divine." },
    { word: "HEAVEN", pronunciation: "HEV-uhn", definition: "The dwelling place of God, often associated with eternal life.", french: "Le lieu de résidence de Dieu, souvent associé à la vie éternelle." },
    { word: "HEBREWS", pronunciation: "HEE-brooz", definition: "A group of people, descendants of Abraham, also a book in the New Testament.", french: "Un groupe de personnes, descendants d'Abraham, également un livre du Nouveau Testament." },
    { word: "HELL", pronunciation: "HEL", definition: "A place of eternal punishment for the wicked after death.", french: "Un lieu de punition éternelle pour les méchants après la mort." },
    { word: "HERALD", pronunciation: "HER-uhld", definition: "A messenger bringing news, often of great significance.", french: "Un messager apportant des nouvelles, souvent d'une grande importance." },
    { word: "HEROD", pronunciation: "HER-uhd", definition: "A title for several kings mentioned in the New Testament, particularly the one who sought to kill the infant Jesus.", french: "Un titre pour plusieurs rois mentionnés dans le Nouveau Testament, en particulier celui qui a cherché à tuer l'enfant Jésus." },
    { word: "HOLINESS", pronunciation: "HOH-lih-ness", definition: "The state of being holy, set apart for God.", french: "L'état d'être saint, mis à part pour Dieu." },
    { word: "HOLY SPIRIT", pronunciation: "HOH-lee SPIR-it", definition: "The third person of the Trinity, who empowers and guides believers.", french: "La troisième personne de la Trinité, qui habilite et guide les croyants." },
    { word: "HOSANNA", pronunciation: "ho-SAN-uh", definition: "A cry of praise or adoration, meaning 'Save, please' or 'Save, now.'", french: "Un cri de louange ou d'adoration, signifiant 'Sauve, s'il te plaît' ou 'Sauve maintenant.'" },
    { word: "HUMILITY", pronunciation: "hyoo-MIL-i-tee", definition: "The quality of being humble, recognizing one's dependence on God.", french: "La qualité d'être humble, reconnaissant sa dépendance à Dieu." },
    { word: "IDOL", pronunciation: "EYE-duhl", definition: "An image or representation of a god used as an object of worship, forbidden by the Bible.", french: "Une image ou représentation d'un dieu utilisée comme objet de culte, interdite par la Bible." },
    { word: "IDOLATRY", pronunciation: "eye-DOL-uh-tree", definition: "The worship of idols or excessive devotion to something other than God.", french: "L'adoration des idoles ou la dévotion excessive à quelque chose d'autre que Dieu." },
    { word: "IMMANUEL", pronunciation: "im-MAN-yuhl", definition: "A name for Jesus meaning 'God with us.'", french: "Un nom pour Jésus signifiant 'Dieu avec nous.'" },
    { word: "INCENSE", pronunciation: "IN-sens", definition: "A substance that produces a fragrant smoke when burned, used in worship in the Old Testament.", french: "Une substance qui produit une fumée parfumée lorsqu'elle est brûlée, utilisée dans le culte dans l'Ancien Testament." },
    { word: "INHERITANCE", pronunciation: "in-HER-i-tuhns", definition: "Something received (especially property or a title) as a result of the death of a family member; also refers to the spiritual heritage of believers.", french: "Quelque chose reçu (en particulier une propriété ou un titre) à la suite du décès d'un membre de la famille ; fait également référence à l'héritage spirituel des croyants." },
    { word: "INTERCESSION", pronunciation: "in-ter-SES-shun", definition: "The act of praying on behalf of others.", french: "L'acte de prier pour les autres." },
    { word: "ISAAC", pronunciation: "EYE-zuhk", definition: "The son of Abraham and Sarah, father of Jacob and Esau.", french: "Le fils d'Abraham et de Sarah, père de Jacob et d'Ésaü." },
    { word: "ISRAEL", pronunciation: "IZ-ray-uhl", definition: "The name given to Jacob and later to the nation descended from him; also the modern nation-state.", french: "Le nom donné à Jacob et plus tard à la nation qui en est descendue ; également l'État-nation moderne." },
    { word: "ISSACHAR", pronunciation: "IS-uh-kar", definition: "One of the twelve tribes of Israel, descended from Jacob's son Issachar.", french: "Une des douze tribus d'Israël, descendue du fils de Jacob, Issachar." },
    { word: "JACOB", pronunciation: "JAY-kub", definition: "The son of Isaac, later named Israel, and the father of the twelve tribes of Israel.", french: "Le fils d'Isaac, plus tard nommé Israël, et le père des douze tribus d'Israël." },
    { word: "JEREMIAH", pronunciation: "jer-uh-MY-uh", definition: "A prophet who warned of the destruction of Jerusalem and the Babylonian exile.", french: "Un prophète qui a averti de la destruction de Jérusalem et de l'exil babylonien." },
    { word: "JERICHO", pronunciation: "JER-ih-koh", definition: "A city whose walls famously fell after Joshua's army marched around them.", french: "Une ville dont les murs sont tombés après que l'armée de Josué les ait contournés." },
    { word: "JERUSALEM", pronunciation: "juh-ROO-suh-luhm", definition: "The capital city of Israel and a central place of worship in the Bible.", french: "La ville capitale d'Israël et un lieu central de culte dans la Bible." },
    { word: "JESUS", pronunciation: "JEE-zuhs", definition: "The central figure of Christianity, believed to be the Son of God and the Messiah.", french: "La figure centrale du christianisme, considéré comme le Fils de Dieu et le Messie." },
    { word: "JEZEBEL", pronunciation: "JEZ-uh-bel", definition: "A queen of Israel known for her idolatry and persecution of prophets.", french: "Une reine d'Israël connue pour son idolâtrie et sa persécution des prophètes." },
    { word: "JOB", pronunciation: "JOHB", definition: "A man known for his suffering and faith in the face of trials; also a book in the Old Testament.", french: "Un homme connu pour sa souffrance et sa foi face aux épreuves ; également un livre dans l'Ancien Testament." },
    { word: "JOEL", pronunciation: "JOH-uhl", definition: "A prophet known for his message of repentance and the coming of the Day of the Lord.", french: "Un prophète connu pour son message de repentance et l'arrivée du Jour du Seigneur." },
    { word: "JOHN THE BAPTIST", pronunciation: "JON thuh BAP-tist", definition: "A prophet who prepared the way for Jesus, preaching repentance and baptizing in the Jordan River.", french: "Un prophète qui a préparé le chemin pour Jésus, prêchant la repentance et baptisant dans le fleuve Jourdain." },
    { word: "JONAH", pronunciation: "JOH-nuh", definition: "A prophet who was swallowed by a great fish after trying to avoid God's command to preach to Nineveh.", french: "Un prophète qui a été avalé par un grand poisson après avoir essayé d'éviter le commandement de Dieu de prêcher à Ninive." },
    { word: "JORDAN", pronunciation: "JOR-dan", definition: "A river in Israel where Jesus was baptized by John the Baptist.", french: "Un fleuve en Israël où Jésus a été baptisé par Jean-Baptiste." },
    { word: "JOSEPH", pronunciation: "JOH-sef", definition: "The son of Jacob who was sold into slavery by his brothers and later became a ruler in Egypt; also the husband of Mary, the mother of Jesus.", french: "Le fils de Jacob qui a été vendu en esclavage par ses frères et qui est devenu plus tard un dirigeant en Égypte ; également le mari de Marie, la mère de Jésus." },
    { word: "JOSHUA", pronunciation: "JOSH-uh-wuh", definition: "The successor of Moses who led the Israelites into the Promised Land.", french: "Le successeur de Moïse qui a conduit les Israélites dans la Terre Promise." },
    { word: "JUBILEE", pronunciation: "JOO-buh-lee", definition: "A year of release and restoration observed every 50 years in Israel.", french: "Une année de libération et de restauration observée tous les 50 ans en Israël." },
    { word: "JUDAH", pronunciation: "JOO-duh", definition: "One of the twelve tribes of Israel, also the name of the southern kingdom after the division of Israel.", french: "Une des douze tribus d'Israël, également le nom du royaume du sud après la division d'Israël." },
    { word: "JUDGE", pronunciation: "JUHJ", definition: "A leader in Israel before the monarchy, also a book in the Old Testament.", french: "Un dirigeant en Israël avant la monarchie, également un livre dans l'Ancien Testament." },
    { word: "JUDGMENT", pronunciation: "JUHJ-muhnt", definition: "The act of judging or the process of making decisions, especially in the context of divine justice.", french: "L'acte de juger ou le processus de prise de décisions, surtout dans le contexte de la justice divine." },
    { word: "KADESH", pronunciation: "kah-DESH", definition: "A wilderness area where the Israelites camped during their journey to the Promised Land.", french: "Une zone désertique où les Israélites ont campé pendant leur voyage vers la Terre Promise." },
    { word: "KINDNESS", pronunciation: "KIND-ness", definition: "The quality of being friendly, generous, and considerate, often encouraged in the Bible.", french: "La qualité d'être amical, généreux et attentionné, souvent encouragée dans la Bible." },
    { word: "KINGDOM OF GOD", pronunciation: "KING-duhm uhv GOD", definition: "The rule of God over the hearts of people and eventually over all creation.", french: "Le règne de Dieu sur les cœurs des gens et finalement sur toute la création." },
    { word: "KINGDOM OF HEAVEN", pronunciation: "KING-duhm uhv HEV-uhn", definition: "Another term for the Kingdom of God, used primarily in the Gospel of Matthew.", french: "Un autre terme pour le Royaume de Dieu, utilisé principalement dans l'Évangile de Matthieu." },

    { word: "KINSMAN", pronunciation: "KINZ-muhn", definition: "A relative or family member; in the Bible, often refers to a close family member with specific duties.", french: "Un parent ou membre de la famille ; dans la Bible, fait souvent référence à un membre proche de la famille ayant des devoirs spécifiques." },
    { word: "KNOWLEDGE", pronunciation: "NAHL-ij", definition: "Information, understanding, or skill that comes from experience or education, often linked to the fear of the Lord.", french: "Information, compréhension ou compétence qui provient de l'expérience ou de l'éducation, souvent liée à la crainte du Seigneur." },
    { word: "LIFE", pronunciation: "LYFE", definition: "Existence, both physical and eternal, often discussed in the context of God's gift to humanity.", french: "Existence, à la fois physique et éternelle, souvent discutée dans le contexte du don de Dieu à l'humanité." },
    { word: "LIGHT", pronunciation: "LYT", definition: "A symbol of truth, purity, and divine revelation in the Bible.", french: "Un symbole de vérité, de pureté et de révélation divine dans la Bible." },
    { word: "LINEN", pronunciation: "LIN-uhn", definition: "A fabric made from flax, often used in priestly garments or Temple furnishings.", french: "Un tissu fabriqué à partir de lin, souvent utilisé dans les vêtements sacerdotaux ou les meubles du Temple." },
    { word: "LION", pronunciation: "LY-uhn", definition: "A large, powerful animal; often used symbolically, for example, as the 'Lion of Judah' representing Christ.", french: "Un grand animal puissant ; souvent utilisé symboliquement, par exemple, comme le 'Lion de Juda' représentant le Christ." },
    { word: "LIVING WATER", pronunciation: "LIV-ing WAW-ter", definition: "A term used by Jesus to describe the Holy Spirit or the eternal life He offers.", french: "Un terme utilisé par Jésus pour décrire le Saint-Esprit ou la vie éternelle qu'il offre." },
    { word: "LOCUST", pronunciation: "LOH-kust", definition: "An insect that devours crops, often used in the Bible as a symbol of judgment.", french: "Un insecte qui dévore les cultures, souvent utilisé dans la Bible comme symbole de jugement." },
    { word: "LONGSUFFERING", pronunciation: "LONG-suh-fer-ing", definition: "Patience in enduring hardship or suffering.", french: "Patience dans l'endurance des difficultés ou de la souffrance." },
    { word: "LORD", pronunciation: "LORD", definition: "A title for God, acknowledging His authority and sovereignty.", french: "Un titre pour Dieu, reconnaissant son autorité et sa souveraineté." },
    { word: "LOVE", pronunciation: "LUHV", definition: "A central theme in the Bible, especially God's love for humanity and the love believers are to have for God and others.", french: "Un thème central dans la Bible, en particulier l'amour de Dieu pour l'humanité et l'amour que les croyants doivent avoir pour Dieu et les autres." },
    { word: "MAGI", pronunciation: "MAH-jai", definition: "Wise men from the East who visited Jesus after His birth.", french: "Des sages venus de l'Est qui ont visité Jésus après sa naissance." },
    { word: "MAGNIFY", pronunciation: "MAG-nuh-fy", definition: "To praise or glorify God.", french: "Louer ou glorifier Dieu." },
    { word: "MANNA", pronunciation: "MAN-uh", definition: "The miraculous food provided by God to the Israelites in the wilderness.", french: "La nourriture miraculeuse fournie par Dieu aux Israélites dans le désert." },
    { word: "MANSION", pronunciation: "MAN-shuhn", definition: "A large and impressive house; in the Bible, used to describe the eternal dwelling places in heaven.", french: "Une grande maison impressionnante ; dans la Bible, utilisée pour décrire les demeures éternelles au ciel." },
    { word: "MARK", pronunciation: "MARK", definition: "A sign or symbol; also refers to the Gospel of Mark in the New Testament.", french: "Un signe ou symbole ; fait également référence à l'Évangile de Marc dans le Nouveau Testament." },
    { word: "MARTYR", pronunciation: "MAR-tur", definition: "A person who suffers death or persecution for their faith.", french: "Une personne qui souffre la mort ou la persécution pour sa foi." },
    { word: "MEANING", pronunciation: "MEEN-ing", definition: "The significance or interpretation of something.", french: "La signification ou l'interprétation de quelque chose." },
    { word: "MELODY", pronunciation: "MEL-uh-dee", definition: "A sequence of musical notes that is musically satisfying; often used in worship.", french: "Une séquence de notes musicales qui est musicalement satisfaisante ; souvent utilisée dans le culte." },
    { word: "MERCY", pronunciation: "MER-see", definition: "Compassion or forgiveness shown toward someone whom it is within one's power to punish or harm.", french: "Compassion ou pardon montré envers quelqu'un qu'il est en son pouvoir de punir ou de nuire." },
    { word: "MESSIAH", pronunciation: "meh-SAH-yah", definition: "The anointed one, expected to be a savior or liberator of a group of people, particularly in Jewish tradition.", french: "L'oint, censé être un sauveur ou un libérateur d'un groupe de personnes, en particulier dans la tradition juive." },
    { word: "MINISTRY", pronunciation: "MIN-uh-stree", definition: "The act of serving God and others, often through preaching, teaching, or charitable work.", french: "L'acte de servir Dieu et les autres, souvent par la prédication, l'enseignement ou le travail caritatif." },
    { word: "MIRACLE", pronunciation: "MIR-uh-kul", definition: "An extraordinary event that is beyond human power and is attributed to divine intervention.", french: "Un événement extraordinaire qui dépasse le pouvoir humain et est attribué à l'intervention divine." },
    { word: "MORALITY", pronunciation: "muh-RAL-i-tee", definition: "Principles concerning the distinction between right and wrong or good and bad behavior.", french: "Principes concernant la distinction entre le bien et le mal ou le comportement bon et mauvais." },
    { word: "NATION", pronunciation: "NAY-shun", definition: "A large group of people united by common descent, history, culture, or language, often associated with a particular territory.", french: "Un grand groupe de personnes unies par une ascendance, une histoire, une culture ou une langue communes, souvent associées à un territoire particulier." },
    { word: "NEHEMIAH", pronunciation: "neh-huh-MY-uh", definition: "A leader who helped rebuild Jerusalem after the Babylonian exile.", french: "Un leader qui a aidé à reconstruire Jérusalem après l'exil babylonien." },
    { word: "NEW COVENANT", pronunciation: "NEW KUV-uh-nuhnt", definition: "The promise of salvation through Jesus Christ, replacing the Old Covenant.", french: "La promesse de salut par Jésus-Christ, remplaçant l'Ancienne Alliance." },
    { word: "OBEDIENCE", pronunciation: "oh-BEE-dee-uhns", definition: "Compliance with an order, request, or law; submission to another's authority.", french: "Conformité à un ordre, une demande ou une loi ; soumission à l'autorité d'un autre." },
    { word: "OFFERING", pronunciation: "AWF-er-ing", definition: "A gift or contribution given to God or the church, often in the form of money or goods.", french: "Un don ou une contribution donnée à Dieu ou à l'église, souvent sous forme d'argent ou de biens." },
    { word: "OMNIPOTENT", pronunciation: "om-NIP-uh-tuhnt", definition: "Having unlimited power; able to do anything, often used to describe God.", french: "Ayant un pouvoir illimité ; capable de tout faire, souvent utilisé pour décrire Dieu." },
    { word: "OMNISCIENT", pronunciation: "om-NIH-shuhnt", definition: "Knowing everything; having infinite awareness, understanding, and insight.", french: "Sachant tout ; ayant une connaissance, une compréhension et une perspicacité infinies." },
    { word: "PEACE", pronunciation: "PEES", definition: "A state of tranquility or quietness; often associated with the absence of conflict.", french: "Un état de tranquillité ou de calme ; souvent associé à l'absence de conflit." },
    { word: "PENTECOST", pronunciation: "PEN-tuh-kawst", definition: "A Christian feast celebrating the descent of the Holy Spirit upon the apostles.", french: "Une fête chrétienne célébrant la descente du Saint-Esprit sur les apôtres." },
    { word: "PROPHET", pronunciation: "PROF-it", definition: "A person regarded as an inspired teacher or proclaimer of the will of God.", french: "Une personne considérée comme un enseignant inspiré ou un proclamateur de la volonté de Dieu." },
    { word: "REDEMPTION", pronunciation: "ree-DEMP-shun", definition: "The action of saving or being saved from sin, error, or evil.", french: "L'action de sauver ou d'être sauvé du péché, de l'erreur ou du mal." },
    { word: "RESURRECTION", pronunciation: "rez-uh-REK-shun", definition: "The act of rising from the dead, particularly referring to Jesus' resurrection.", french: "L'acte de ressusciter des morts, se référant particulièrement à la résurrection de Jésus." },
    { word: "SALVATION", pronunciation: "sal-VAY-shun", definition: "Deliverance from sin and its consequences, often through faith in Jesus Christ.", french: "Délivrance du péché et de ses conséquences, souvent par la foi en Jésus-Christ." },
    { word: "SACRIFICE", pronunciation: "SAK-ruh-fice", definition: "An act of giving up something valued for the sake of something else regarded as more important.", french: "Un acte de renoncer à quelque chose de valeur pour le bien de quelque chose d'autre considéré comme plus important." },
    { word: "SABBATH", pronunciation: "SAB-uhth", definition: "A day of religious observance and abstinence from work, traditionally observed on the seventh day.", french: "Un jour d'observation religieuse et d'abstinence de travail, traditionnellement observé le septième jour." },
    { word: "SACRED", pronunciation: "SAY-kred", definition: "Regarded with reverence and respect; holy.", french: "Considéré avec révérence et respect ; sacré." },
    { word: "SANCTIFICATION", pronunciation: "sank-tuh-fi-KAY-shun", definition: "The process of being made holy, set apart for God's purposes.", french: "Le processus de devenir saint, mis à part pour les desseins de Dieu." },
    { word: "SCRIPTURE", pronunciation: "SKRIP-chur", definition: "The sacred writings of Christianity contained in the Bible.", french: "Les écrits sacrés du christianisme contenus dans la Bible." },
    { word: "SPIRIT", pronunciation: "SPIR-it", definition: "The non-physical part of a person, often regarded as immortal; also refers to the Holy Spirit.", french: "La partie non physique d'une personne, souvent considérée comme immortelle ; fait également référence au Saint-Esprit." },
    { word: "TESTAMENT", pronunciation: "TES-tuh-muhnt", definition: "A covenant or agreement; refers to the two main divisions of the Bible (Old and New Testament).", french: "Un pacte ou accord ; fait référence aux deux principales divisions de la Bible (Ancien et Nouveau Testament)." },
    { word: "TRINITY", pronunciation: "TRIN-i-tee", definition: "The Christian doctrine that God exists as three persons in one essence: Father, Son, and Holy Spirit.", french: "La doctrine chrétienne selon laquelle Dieu existe comme trois personnes en une seule essence : le Père, le Fils et le Saint-Esprit." },
    { word: "WITNESS", pronunciation: "WIT-nuhs", definition: "A person who sees an event, typically a crime or accident, and can give a firsthand account.", french: "Une personne qui voit un événement, typiquement un crime ou un accident, et peut donner un compte rendu de première main." },
    { word: "WORSHIP", pronunciation: "WUR-ship", definition: "The feeling or expression of reverence and adoration for a deity.", french: "Le sentiment ou l'expression de révérence et d'adoration pour une divinité." },
    { word: "ZION", pronunciation: "ZYE-uhn", definition: "A hill in Jerusalem, symbolizing the Jewish homeland and the spiritual center of the Jewish faith.", french: "Une colline à Jérusalem, symbolisant la patrie juive et le centre spirituel de la foi juive." },
    { word: "ZIONISM", definition: "Although not a biblical term, it relates to the biblical desire for the Jewish people to return to the land of Israel." },
    { word: "ZIPPORAH", definition: "The wife of Moses." },
    { word: "ZOAR", definition: "A city near Sodom and Gomorrah, where Lot fled during their destruction." },
    { word: "ZODIAC", definition: "A circle of twelve constellations used in astrology (not a biblical concept, but often discussed in relation to the Bible)." }
];

const wordList = document.getElementById('wordList');
const currWord = document.getElementById('currentWord');
const currIndex = document.getElementById('indexWord');

let currentIndex = 0;
let intervalId;

function displayWords(wordArray) {
    wordList.innerHTML = ''; // Clear the existing list
    wordArray.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.word}</strong> (${item.pronunciation}): 
        
        <section> ${item.definition} </section>  
        [FR] : ${item.french}`;
        wordList.appendChild(li);
    });
}

function searchWord() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredWords = words.filter(item => item.word.toLowerCase().includes(input));
    displayWords(filteredWords);
}

// Function to display words one by one every 5 minutes
function displayWordsWithInterval() {
    if (currentIndex >= words.length) {
        currentIndex = 0; // Reset to the beginning
    }

    const currentWord = words[currentIndex];
    currWord.innerHTML = `<li> <strong> ${currentWord.word } </strong>
    (${ currentWord.pronunciation}) :  </br> 
    <section>${ currentWord.definition } </section>
    [FR] : ${ currentWord?.french } </li>`;
    currentIndex++;
    currIndex.innerHTML = `<h3> ${currentIndex} </h3>`

    // Set a timeout for the next word
    intervalId = setTimeout(displayWordsWithInterval, 30000); // 300000 ms = 5 minutes
}

function prev(){
    if (currentIndex >= words.length) {
        currentIndex = 0; // Reset to the beginning
    }

    if (currIndex <= 0) {
        return
    }

    const currentWord = words[currentIndex];
    currWord.innerHTML = `<li> <strong> ${currentWord.word} </strong>
    (${currentWord.pronunciation}) :  </br> 
    <section>${currentWord.definition} </section>
    [FR] : ${currentWord?.french} </li>`;
    currentIndex--;
    currIndex.innerHTML = `<h3> ${currentIndex} </h3>`
}

function next() { 
    if (currentIndex >= words.length) {
        currentIndex = 0; // Reset to the beginning
    }

    const currentWord = words[currentIndex];
    currWord.innerHTML = `<li> <strong> ${currentWord.word} </strong>
    (${currentWord.pronunciation}) :  </br> 
    <section>${currentWord.definition} </section>
    [FR] : ${currentWord?.french} </li>`;
    currentIndex++;
    currIndex.innerHTML = `<h3> ${currentIndex} </h3>`
}

// Start displaying words when the page loads
window.onload = function () {
    displayWords(words); // Display all words initially
    displayWordsWithInterval(); // Start the interval display
};

// Function to stop the interval (if needed)
function stopDisplayingWords() {
    clearTimeout(intervalId);
}
