const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Tómende keltirilgen kompyuter tarmaqlarınıń qaysı biri aldın payda bolǵan?",
    a: "global kompyuter tarmaqları",
    b: "Yanvar ayınıń birinshi dúyshembinde",
    c: "Mart ayınıń aqırǵı jumasında",
    d: "Noyabr ayınıń birinshi dúyshembinde"
  },
  {
    quostion: "Tórt bir-biri menen baylanısqan baylamlar strukturası (kvadrat formasında ) qaysı tapologiya túrine tiyisli?",
    a: "Sheńber",
    b: "CCNA, CCNP, MCITP",
    c: "A+, Network+, Security+",
    d: "LPI, RHCE, vCP"
  },
  {
    quostion: "Izbe-iz bir-biri menen baylanısqan 3 baylamlar (aqırı bası menen baylanıspaǵan) strukturası qaysı tapologiya túrine tiyisli?",
    a: "Ulıwmalıq shina",
    b: "Tarmaqtı sazlaw",
    c: "Paydalanıwshılardı qollap-quwatlaw",
    d: "Rezerv nusqasın jaratıw"
  },
  {
    quostion: "Kompyuter sistemalarında maǵlıwmatlardı uzatıw isenimliligin asırıw qanday ámel arqalı orınlanadı?",
    a: "Kontrol summanı esaplaw arqalı",
    b: "F8 túymesin basıw ",
    c: "Kompyuterdi qayta jumısqa túsiriw",
    d: "BIOS ga kirisiw"
  },
  {
    quostion: "Qaysı tapologiya birgelikte paydalanılmaytuǵın ortalıqtı qollanbawı múmkin?",
    a: "Tolıq baylanısqan",
    b: "Qattı disktı formatlaw",
    c: "Ámeldegi operatsion sistemanı saqlap qalıw ",
    d: "Ornatıw procesin avtomatlastırıw"
  },
  {
    quostion: "Kompyuterdiń sırtqı interfeysi degende ne túsiniledi?",
    a: "Kompyuter menen sırtqı apparattı baylanıstırıwshı sımlar hám olar arqalı informaciya almasıw qaǵıydalar toplamları",
    b: "JSON",
    c: "CSV",
    d: "HTML"
  },
  {
    quostion: "Úsh óz-ara baylanısqan baylamlardan ibarat struktura (úshmúyeshlik formasında) tapologiyanıń qaysı túrine tiyisli?",
    a: "Tolıq baylanısqan",
    b: "Active Directory paydalanıwshıları hám kompyuterler konsolini ashıw",
    c: "Paydalanıwshılar konteynerini oń túymesin basıw",
    d: "Jańa paydalanıwshı jaratıw"
  },
  {
    quostion: "Qanday tapologiyanıń jeke jaǵdayı ulıwmalıq shina esaplanadı?",
    a: "Juldız",
    b: "Tarmaqtı basqarıw",
    c: "Paydalanıwshılardı autentifikatsiya qılıw",
    d: "Rezerv nusqaların jaratıw"
  },
  {
    quostion: "Tapologiyalardan qaysı biriniń isenimliligi joqarı esaplanadı?",
    a: "Juldız",
    b: "Sırtqı, ishki, ulıwma",
    c: "Ulıwma, jeke, ishki",
    d: "Ishki, sırtqı, ulıwma"
  },
  {
    quostion: "MAC júzesi qanday wazıypanı atqaradı?",
    a: "Uzatıw ortalıǵına múrájet etiwdi basqarıw",
    b: "Windows operatsion sistemasınıń jańalanıwı",
    c: "Tarmaq qáwipsizligi ushın programma",
    d: "Paydalanıwshı maǵlıwmatların saqlaw xızmeti"
  },
  {
    quostion: "LLC júzesi qanday wazıypanı orınlaydı?",
    a: "Stanciyalar ortasında informaciyanı hár-qıylı isenimlilik dárejesi menen uzatıw",
    b: "Gruppa siyasatınan",
    c: "Qánigelesken programmadan",
    d: "Ornatıw processinde"
  },
  {
    quostion: "Stanciyalar ortasında informaciyanı hár-qıylı isenimlilik dárejesi menen uzatıw wazıypasın qaysı júze orınlaydı?",
    a: "LLC júzesi",
    b: "Event viewer den",
    c: "Task Manager den",
    d: "Performance Monıtor den"
  },
  {
    quostion: "Uzatıw ortalıǵına múrájet etiwdi basqarıw wazıypasın qaysı júze orınlaydı?",
    a: "MAC júzesi",
    b: "CTRL + SHIFT + ESC",
    c: "ALT + F4",
    d: "Win + L"
  },
  {
    quostion: "l0 Base-2 segmentiniń uzınlıǵı kóbi menen qansha bolıwı múmkin?",
    a: "185 metr",
    b: "Paydalanıwshılar",
    c: "Kompyuterler",
    d: "Printers"
  },
  {
    quostion: "Oralma juplıq kabeli sımların, onıń konnektorlarına jalǵawdıń neshe túrli variantları bar?",
    a: "2",
    b: "Maǵlıwmatlardı rezervlew",
    c: "Tarmaq qáwipsizligin támiyinlew",
    d: "Internetge jalǵanıwdı basqarıw"
  },
  {
    quostion: "Ethernet tarmaqlarında uzatıw ortalıǵına múrájet etiwdiń qaysı usılı qollanıladı?",
    a: "CSMA/CD",
    b: "System Restore",
    c: "Task Manager",
    d: "Device Manager"
  },
  {
    quostion: "Ethernet de kommutaciyalawdıń qaysı túrinen paydalanıladı?",
    a: "Paketlerdi deytagrammalı kommutaciyalaw",
    b: "Tarmaqtı tezlestiriw",
    c: "Maǵlıwmatlar rezervlew",
    d: "Ornatıw procesin avtomatlastırıw"
  },
  {
    quostion: "Optikalıq talshıqlı Ethernet tarmaǵınıń maksimal uzınlıǵı qanday?",
    a: "2740 m",
    b: "ISO",
    c: "DAT",
    d: "TXT"
  },
  {
    quostion: "100 Base-TX specifikaciyası qaysı texnologiyaǵa tiyisli?",
    a: "Fast Ethernet",
    b: "Paydalanıwshı qorǵawınan",
    c: "Gruppa siyasatınan",
    d: "Active Directory den"
  },
  {
    quostion: "Ethernet texnologiyası tarmaqlarında maǵlıwmatlar kadrı qanday preambulaǵa iye?",
    a: "1111",
    b: "Data Recovery",
    c: "System Restore",
    d: "Disk Cleanup"
  },
  {
    quostion: "Signaldı tolıq aylanıp shıǵıw waqıtı -PDV nıń maksimal mánisi qanday?",
    a: "576 bitli interval",
    b: "DHCP",
    c: "DNS",
    d: "FTP"
  },
  {
    quostion: "PDV degende ne túsiniledi?",
    a: "Signaldı tolıq aylanıp shıǵıw waqıtı",
    b: "Microsoft Word",
    c: "Powershell",
    d: "Notepad"
  },
  {
    quostion: "Fast Ethernet texnologiyası specifikaciyaları qaysı komitet quramında islep shıǵılǵan?",
    a: "802.3",
    b: "Task Manager",
    c: "Event viewer",
    d: "Control Panel"
  },
  {
    quostion: "Ethernet texnologiyasında koaksial kabeliniń maǵlıwmatlardı uzatıw tezligi qanday?",
    a: "10 Mbit/s",
    b: "Antiviruslar",
    c: "Firewall",
    d: "Úzliksiz jańalanıwlar"
  },
  {
    quostion: "Fast Ethernet texnologiyasında oralma juplıq kabeliniń maǵlıwmatlardı uzatıw tezligi qanday?",
    a: "100 Mbit/s",
    b: "Active Directory den",
    c: "Ornatıw processinen",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Lokal tarmaqlarda keń tarqalǵan tapologiya túri qaysı?",
    a: "Juldız",
    b: "FTP",
    c: "HTTP",
    d: "SSH"
  },
  {
    quostion: "100 Base-TX specifikaciya qaysı texnologiyaǵa tiyisli?",
    a: "Fast Ethernet",
    b: "FAT32",
    c: "exFAT",
    d: "HFS+"
  },
  {
    quostion: "1000 Base-SX specifikaciya qaysı texnologiyaǵa tiyisli?",
    a: "Gigabit Ethernet",
    b: "Task Scheduler járdeminde",
    c: "Disk Cleanup járdeminde",
    d: "Event viewer járdeminde"
  },
  {
    quostion: "10 Base-T standartında oralma juplıq kabeli sımlarınıń neshe juplıǵı isletiledi?",
    a: "2",
    b: "Disk Imaging",
    c: "File History",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "100 Base-TX specifikaciyasında oralma juplıq kabeli sımlarınıń neshe juplıǵı isletiledi?",
    a: "2",
    b: "Task Scheduler",
    c: "Event viewer",
    d: "Disk Management"
  },
  {
    quostion: "Kompyuterdi koncentrator yamasa kommutator menen jalǵaw ushın UTP kabeliniń qaysı variantı isletiledi?",
    a: "Tuwrıdan-tuwrı jalǵanǵan variant",
    b: "Netsh buyrıq qatarı járdeminde",
    c: "Control Panel den",
    d: "Qollanba járdeminde"
  },
  {
    quostion: "Kompyuterdi kompyuter menen jalǵaw ushın UTP kabeliniń qaysı variantı isletiledi?",
    a: "Krossover variant",
    b: "Share Permissions den",
    c: "NTFS Permissions den",
    d: "Tarmaq sazlamalaridan"
  },
  {
    quostion: "Tarmaq adapteriniń kadrlardı kompyuterden uzatıp beretuǵın jalǵanıw noqatı (kontakti) qanday belgilenedi?",
    a: "Tx",
    b: "Sistemanıń islewin jaqsılaw",
    c: "Kodtı tiykarǵı dárejede ózgertirmew",
    d: "Internetge jalǵanıwdı támiyinlew"
  },
  {
    quostion: "Tarmaq adapteriniń kadrlardı kompyuterge qabıl etip alıwshı jalǵanıw noqatı (kontaktı) qanday belgilenedi?",
    a: "Rx",
    b: "MSI",
    c: "EXE",
    d: "All-ın-One"
  },
  {
    quostion: "Ethernet texnologiyası qaysı logikalıq tapologiya tiykarında qurılǵan?",
    a: "Ulıwmalıq shina",
    b: "Fizikalıq qatlam",
    c: "Maǵlıwmatlar qatlam",
    d: "Sesion qatlam"
  },
  {
    quostion: "Fast Ethernet texnologiyasında qaysı túrdegi kabel sistemalarınan paydalanılǵan?",
    a: "ko'pmodalı optikalıq talshıqlı, 5 kategoriyalı oralma juplıq, 3 kategoriyalı oralma juplıq",
    b: "Task Scheduler",
    c: "CMD",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Kadrlar izbe-izligin koncentratorlar arqalı ótiwi nátiyjesinde, kadrlar arasındaǵı aralıqtıń qısqarıwı - PVV, kóbi menen qansha bolıwı múmkin?",
    a: "49 bitli interval",
    b: "Task Manager járdeminde",
    c: "Disk Cleanup den",
    d: "Universial uninstaller den"
  },
  {
    quostion: "MAC júze astı júzesi OSI modeliniń qaysı júzesine tiyisli?",
    a: "kanal júzesine",
    b: "Tek nomerler",
    c: "Tek háripler",
    d: "Tek úlken háripler"
  },
  {
    quostion: "Jińishke koaksial kabel tiykarında qurılǵan tarmaqda kompyuterler arasındaǵı eń kishi aralıq qanday bolıwı kerek?",
    a: "1 m",
    b: "Control Panel den",
    c: "Disk Management den",
    d: "Event viewer den"
  },
  {
    quostion: "100 Base-TX specifikaciyası qanday fizikalıq tapologiyaga iye?",
    a: "ierarxiyalıq juldız",
    b: "HTTP",
    c: "SMTP",
    d: "FTP"
  },
  {
    quostion: "100 Base-TX specifikaciyası qanday logikalıq tapologiyaga iye?",
    a: "ulıwmalıq shina",
    b: "Event viewer arqalı",
    c: "Disk Management arqalı",
    d: "All-ın-One Installerdan"
  },
  {
    quostion: "I hám II klass Fast Ethernet texnologiyası tákirarlagıshları nesi menen parıq etedi?",
    a: "Fizikalıq júzesine tiyisli bar portları menen",
    b: "Online programmalar",
    c: "MSI fayllar",
    d: "EXE fayllar"
  },
  {
    quostion: "Fast Ethernet texnologiyasında RJ-45 jalǵawshınıń qaysı kontaktlari isletiledi?",
    a: "1,2,3,6",
    b: "Task Manager den",
    c: "Performance Monıtor den",
    d: "Disk Cleanup den"
  },
  {
    quostion: "Ethernet texnologiyası neshe standartqa iye?",
    a: "4",
    b: "Statikalıq bolıwı kerek",
    c: "DNS arqalı",
    d: "NAT arqalı"
  },
  {
    quostion: "Fast Ethernet texnologiyası neshe specifikaciyaǵa iye?",
    a: "3",
    b: "Internette maǵlıwmat jiberiw sisteması",
    c: "Úlken kólemli fayllardı saqlaw sisteması",
    d: "Operatsion sistema"
  },
  {
    quostion: "Ulıwmalıq shina tapologiyali lokal tarmaqlarda koncentratorlar qanday?",
    a: "Kompyuter tárepinen uzatılıp atırǵan maǵlıwmattı barlıq kompyuterge jóneltiredi",
    b: "App Store",
    c: "gApp Store",
    d: "Play Store"
  },
  {
    quostion: "Qaysı koncentrator kompyuter tárepinen uzatılıp atırǵan maǵlıwmattı barlıq kompyuterge jóneltiredi?",
    a: "Ethernet koncentratorı",
    b: "Windows Update arqalı",
    c: "Olardı qolda óshiriw arqalı",
    d: "Ayırım programmalardı tańlaw arqalı"
  },
  {
    quostion: "Qaysı koncentrator kompyuter tárepinen uzatılǵan maǵlıwmattı sheńber arqalı keyingi kompyuterge jóneltiredi?",
    a: "Token Ring koncentratorı",
    b: "Google járdeminde",
    c: "Microsoft Store arqalı",
    d: "Óz ishinde qıdırıw"
  },
  {
    quostion: "Tuwrıdan-tuwrı jalǵanǵan UTP kabelinde Tx uzatıwshı retinde qaysı reńlerdegi sımlar isletiledi?",
    a: "Jasıl, aq-jasıl",
    b: "Shifrlaw",
    c: "Rezervlew",
    d: "Disktı bos halǵa keltiriw"
  },
  {
    quostion: "Tuwrıdan-tuwrı jalǵanǵan UTP kabelinde Rx qabıl etiwshi retinde qaysı reńlerdegi sımlar isletiledi?",
    a: "Qızǵısh-sarı, aq - qızǵısh-sarı",
    b: "PowerShell arqalı",
    c: "Control Panel arqalı",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Kesilisken jaǵdayda jalǵanǵan (krossover) UTP kabelinde Tx uzatıwshı retinde qaysı reńlerdegi sımlar isletiledi?",
    a: "Qızǵısh-sarı, aq - qızǵısh-sarı",
    b: "Servislerdi óshiriw",
    c: "Disktı tazalaw",
    d: "Jańa paydalanıwshını qosıw"
  },
  {
    quostion: "Krossover jalǵanǵan UTP kabelinde Rx qabıl etiwshi retinde qaysı reńlerdegi sımlar isletiledi?",
    a: "Jasıl, aq-jasıl",
    b: "Task Manager arqalı",
    c: "Disk Management arqalı",
    d: "Windows Defender arqalı"
  },
  {
    quostion: "MSAU qanday wazıypanı atqaradı?",
    a: "aktiv bolmaǵan koncentrator wazıypasın",
    b: "Group Policy arqalı",
    c: "Windows Update arqalı",
    d: "Qollanba menen"
  },
  {
    quostion: "FDDI texnologiyasında buzılmastan islew qábilietin asırıw qanday támiyinlengen?",
    a: "eki optikalıq talshıqlı sheńberdi payda etiw tiykarında",
    b: "Defragmenter",
    c: "Task Manager",
    d: "Event viewer"
  },
  {
    quostion: "FDDI texnologiyasınıń fizikalıq júzesi neshe júze astı jújege bólinedi?",
    a: "2",
    b: "Internet baylanısın támiyinlew",
    c: "Maǵlıwmatlardı paketlerge bolıw",
    d: "Óz-ara baylanıs ushın baylanısıw jaratıw"
  },
  {
    quostion: "FDDI texnologiyasında, sheńberlerge kóbi menen neshe kompyuter jalǵanıwı múmkin?",
    a: "500",
    b: ".exe",
    c: ".docx",
    d: ".jpg"
  },
  {
    quostion: "FDDI tarmaqlarında uzatıw ortalıǵına múrájet etiwdiń qaysı usılı qollanıladı?",
    a: "marker tiykarında múrájet etiwdiń operativ usılı",
    b: "DNS",
    c: "NAT",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Token Ring tarmaqlarında uzatıw ortalıǵına múrájet etiwdiń qaysı usılı qollanıladı?",
    a: "marker tiykarında múrájet etiw usılı",
    b: "Sistemanıń operativligin asıradı",
    c: "Tek jańa funkciyalarǵa alıp keledi",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Keltirilgen texnologiyalardıń qaysı birleri lokal tarmaq texnologiyalarına tiyisli?",
    a: "FDDI, Token Ring",
    b: "Tarmaqtıń qáwipsizligin támiyinlew",
    c: "Paydalanıwshılardıń jeke maǵlıwmatların qorǵaw",
    d: "Internetten tikkeley jalǵanıwdı támiyinlew"
  },
  {
    quostion: "FDDI texnologiyasında stanciyalar arasındaǵı eń uzaq aralıq qanday bolıwı múmkin?",
    a: "2000m.",
    b: "File Explorer",
    c: "Network Settings",
    d: "Task Manager"
  },
  {
    quostion: "Sheńber tapologiyali lokal tarmaqlarda koncentratorlar qanday funkciyanı atqaradı?",
    a: "Kompyuter tárepinen uzatılǵan maǵlıwmattı sheńber arqalı keyingi kompyuterge jóneltiredi",
    b: "File Explorer",
    c: "Task Scheduler",
    d: "Event viewer"
  },
  {
    quostion: "FDDI tarmaǵında maǵlıwmatlardı uzatıwda qanday múrájet etiw usılı qollanıladı?",
    a: "Tezlestirilgen markerli múrájet etiw usılı",
    b: "Taǵı protsessor ornatıw",
    c: "Qosımsha yad ornatıw",
    d: "Jańalanıwlardı ornatıw"
  },
  {
    quostion: "Token Ring tarmaǵında maǵlıwmatlardı uzatıwda qanday múrájet etiw usılı qollanıladı?",
    a: "Markerli múrájet etiw usılı",
    b: "Rezerv saqlaw maydanı etarli bolmawi",
    c: "Jańalanıwlar avtomatikalıq túrde ózgeriwi",
    d: "Qayta ornatılǵan programmalarda maǵlıwmatlar joǵalıp ketiwi"
  },
  {
    quostion: "FDDI tarmaǵınıń qaysı elementleri buzilmay islew qábilietin támiyinleydi?",
    a: "Maǵlıwmatlardı uzatıw ushın eki sheńberdiń bar ekenligi",
    b: "Control Panel",
    c: "Settings",
    d: "Network Connections"
  },
  {
    quostion: "Token Ring texnologiyası kadrınıń maksimal uzınlıǵı nege baylanıslı?",
    a: "sheńberdiń islew tezligine",
    b: "Joytıwdan qorǵaw etedi",
    c: "Tarqatıwdan qorǵaw etedi",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Sımsız tarmaqlar standartları qaysı komitet quramında islep shigılıp atır?",
    a: "802.11",
    b: "Programma bahası",
    c: "Programma qosımsha funksiyaları",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Házirgi waqıtta kóp isletiletuǵın, 802. 11 standartına tiyisli specifikaciyanı kórsetiń?",
    a: "a, b, g",
    b: "Qayta ózgeriwsiz ornatıw",
    c: "Basqa paydalanıwshılarǵa tayanish",
    d: "Hesh bolmaǵanda eski versiyanı ornatıw"
  },
  {
    quostion: "802. 11 specifikaciyası sımsız lokal tarmaǵı diametriniń shegaraları qanday?",
    a: "100 - 300 m",
    b: "Diskdıń ólshemin asırıw",
    c: "Programma usınıs etiw",
    d: "Sistemanı jańalaw"
  },
  {
    quostion: "Keltirilgen qısqartpalardıń qaysı biri bazalıq yamasa tiykarǵı xızmetler kompleksi kórsetiletuǵın tarmaqtı ańlatadı?",
    a: "BSS",
    b: "Sistemanı jańalaw",
    c: "Antivirustı aktivlestiriw",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Keltirilgen qısqartpalardıń qaysı biri keńeytirilgen (qosımsha) xızmetler kompleksin kórsetetuǵın tarmaqtı ańlatadı?",
    a: "ESS",
    b: "Windows Defender",
    c: "Disk Management",
    d: "Control Panel"
  },
  {
    quostion: "BSS degende ne túsiniledi?",
    a: "Tiykarǵı xızmetler kompleksi kórsetiletuǵın sımsız tarmaq",
    b: ".exe",
    c: ".jpg",
    d: ".html"
  },
  {
    quostion: "ESS degende ne túsiniledi?",
    a: "Qosımsha xızmetler kompleksin kórsetetuǵın sımsız tarmaq",
    b: "Control Panel arqalı",
    c: "Command Prompt arqalı",
    d: "Settings arqalı"
  },
  {
    quostion: "802.11 a specifikaciyasında maǵlıwmatlardı uzatıwdıń maksimal tezligi qanday?",
    a: "54 Mbit/s",
    b: "Gpupdate járdeminde",
    c: "Disk Cleanup arqalı",
    d: "PowerShell járdeminde"
  },
  {
    quostion: "802.11 specifikaciyası qanday maǵlıwmatlardı uzatıwdıń maksimal tezligi qanday?",
    a: "2 Mbit/s",
    b: "Paydalanıwshı esapların qosıw",
    c: "Antivirustı ornatıw",
    d: "Yad asırıw"
  },
  {
    quostion: "802.11b specifikaciyası maǵlıwmatlardı uzatıwdıń maksimal tezligi qanday?",
    a: "11 Mbit/s",
    b: "Jergilikli disktan",
    c: "Telegram toparlarınan",
    d: "Basqa paydalanıwshılardan"
  },
  {
    quostion: "802.11g specifikaciyası maǵlıwmatlardı uzatıwdıń maksimal tezligi qanday?",
    a: "54 Mbit/s",
    b: "Programma qáwipsizligi",
    c: "Programma islew jaǵdayı",
    d: "Programma menen baylanıslı interfeys"
  },
  {
    quostion: "802.11 standartına tiyisli tapologiyalardıń qaysı túrleri bar?",
    a: "BSS, ESS",
    b: "Antivirus programmaların ornatıw",
    c: "Firewallni ornatıw",
    d: "Túyme yamasa programma usınıs etilmeydi"
  },
  {
    quostion: "Tarmaqtı fizikalıq strukturalawda qaysı apparat isletiledi?",
    a: "Tákirarlawshı  (koncentrator)",
    b: "Yad jetispewshiligi",
    c: "Versiya uyqas kelmewi",
    d: "Internet úzilisi"
  },
  {
    quostion: "Qaysı qurılma tarmaqtıń logikalıq strukturasın ózgertiwi múmkin?",
    a: "kópir, marshrutizator, kommutator hám shlyuz",
    b: "Task Manager",
    c: "Device Manager",
    d: "Printer Settings"
  },
  {
    quostion: "Ethernet koncentratorı qanday wazıypanı atqaradı?",
    a: "kompyuterden kiyatırǵan informaciyanı qalǵan barlıq kompyuterge jóneltirip beredi",
    b: "Jumıs iskerlikınıń tómenlewi",
    c: "Texnikalıq máseleler",
    d: "Qayta ornatıw zárúrshiligi"
  },
  {
    quostion: "Kompyuter tarmaǵınıń fizikalıq strukturalaw ne maqsette ámelge asıriladı?",
    a: "Tarmaq diametrin asırıw ushın",
    b: "Jańalıqlar hám funkciyalardı qosadı",
    c: "Zero zálellerden qorǵaw etedi",
    d: "Sistemanı tezlestiredi"
  },
  {
    quostion: "Kompyuter tarmaǵınıń logikalıq strukturalaw ne maqsette ámelge asıriladı?",
    a: "Trafikti lokallastırıw ushın",
    b: "Antivirustı aktivlestiriw",
    c: "Bir neshe rezerv versiyaların ornatıw",
    d: "Hesh qanday tayarlıqsız rezerv alıw"
  },
  {
    quostion: "Kommutator kópirden nesi menen parıq etedi?",
    a: "Kadrlardı parallel qayta islewde",
    b: "Manual ornatıw",
    c: "Qayta júklew",
    d: "Qattı disktı ózgertiw"
  },
  {
    quostion: "OSI modelinde neshe júze bar?",
    a: "7",
    b: "Settings > Time & Language",
    c: "Control Panel > Date and Time",
    d: "Task Manager"
  },
  {
    quostion: "OSI modeliniń tórtinshi júzesi qanday ataladı?",
    a: "Transport júzesi",
    b: "Beta testing",
    c: "Alpha testing",
    d: "Usability testing"
  },
  {
    quostion: "OSI modeliniń besinshi júzesi qanday ataladı?",
    a: "Seanslar júzesi",
    b: "Programma jańalanıwı",
    c: "Programma járdem menyusı",
    d: "Rásmiy sayt"
  },
  {
    quostion: "Fizikalıq júze",
    a: "Seanslar júzesi",
    b: "Qayta júklew",
    c: "IP adresin jańalaw",
    d: "Hújjetlerdi toplaw"
  },
  {
    quostion: "OSI modeliniń ekinshi júzesi qanday ataladı?",
    a: "Kanal júzesi",
    b: "Programmalardı qumar arqalı jaqsılaw",
    c: "Sistemada jaydı esaplaw",
    d: "Maǵlıwmatlar bazasın asırıw"
  },
  {
    quostion: "OSI modeliniń úshinshi júzesi qanday ataladı?",
    a: "Tarmaq júzesi",
    b: "Ornatılǵan programmalardı tekseriw",
    c: "Jańalanıwlardı biykarlaw etiw",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "OSI modeliniń altınshı júzesi qanday ataladı?",
    a: "Kórsetiw (usınıs) júzesi",
    b: "Programmalar qatarında óshiriw",
    c: "Disk Cleanup isletiw",
    d: "Pilat qánigelesken qurallardı ornatıw"
  },
  {
    quostion: "OSI modeliniń jetinshi júzesi qanday ataladı?",
    a: "Ámeliy júze",
    b: "Programma organizatori",
    c: "Paydalanıw boyınsha kórsetpeler",
    d: "Tabıslar haqqında túsindirmeler"
  },
  {
    quostion: "OSI modeliniń qaysı júzesi tarmaq qa baylanıslı júze esaplanadı?",
    a: "fizikalıq, kanal hám tarmaq júzesi",
    b: "Antivirus skanerinen ótkeriw",
    c: "Internette túsindiriwleri hám reytinglerin oqıw",
    d: "Rásmiy saytın kórip shıǵıw"
  },
  {
    quostion: "OSI modeliniń tarmaq júzesi wazıypaları keltirilgen apparatlardıń qaysısında orınlanadı?",
    a: "Marshrutizator",
    b: "Antivirus programmaları",
    c: "Shifrlaw quralları",
    d: "Jańalanıwlardı basqarıw"
  },
  {
    quostion: "OSI modeliniń kanal júzesi arqalı uzatılatuǵın maǵlıwmatlardıń birligi qanday ataladı?",
    a: "Kadr",
    b: "Control Panel",
    c: "File Explorer",
    d: "Disk Cleanup"
  },
  {
    quostion: "Elektr signalların qabıllaw hám uzatıw wazıypaların OSI modeliniń qaysı júzesi orı`nlaydı?",
    a: "Fizikalıq júze",
    b: "Internetge baylanısqan",
    c: "Signal tarqatadı",
    d: "Tarmaq qáwipsizligin támiyinleydi"
  },
  {
    quostion: "Maǵlıwmatlardı uzatıwdıń optimal marshrutların anıqlaw wazıypaların OSI modeliniń qaysı júzesi orınlaydı?",
    a: "Tarmaq júzesi",
    b: "Diskta jay jemiriledi",
    c: "Rezerv programmasında qátelik",
    d: "Qayta júklew zárúrshiligi"
  },
  {
    quostion: "Klientler programmaları menen óz-ara baylanıs wazıypaların OSI modeliniń qaysı júzesi oriınlaydı?",
    a: "Ámeliy júze",
    b: "Paydalanıwshı túsindiriwlerin oqıw",
    c: "Usınıs hám túsindirmelerdi úyreniw",
    d: "Sınaq versiyalarınan paydalanıw"
  },
  {
    quostion: "Keltirilgen protokollardıń qaysıları tarmaq júzesi protokollarına tiyisli?",
    a: "IP, IPX",
    b: "Tez hám qolay",
    c: "Programmalıq támiynat versiyaların jańalaw",
    d: "Aljasıqlardıń aldın alıw"
  },
  {
    quostion: "Keltirilgen protokollardıń qaysıları transport júzesi protokollarına tiyisli?",
    a: "TCP,UDP",
    b: "Programma awqamınan qutılıw",
    c: "Programma sınaqtan ótiwi múmkin",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Keltirilgen protokollardıń qaysıları ámeliy júzesi protokollarına tiyisli?",
    a: "NFS, FTP",
    b: "Maǵlıwmatlardı saqlaw",
    c: "Tarmaq jalǵanıwın támiyinlew",
    d: "Paydalanıwshı interfeysin jaratıw"
  },
  {
    quostion: "Keltirilgen wazıypalardan qay biri ulıwma kommutatsiyalaw wazıypasına tiyisli emes?",
    a: " informaciyanı indekslew",
    b: "Saqlaw",
    c: "Kesiw",
    d: "Óshiriw"
  },
  {
    quostion: "OSI modeliniń fizikalıq júzesi qanday funktsiyalardı atqaradı?",
    a: " Elektr signalların uzatıw hám qabıllaw",
    b: "Antivirus",
    c: "Tekst redaktorı",
    d: "Brauzer"
  },
  {
    quostion: "OSI modeliningkanal júzesi qaysı funktsiyalardı atqaradı?",
    a: "Baylanıs kanalın hám maǵlıwmatlardı uzatıw ortalıqına murajat qılıwdı basqarıw",
    b: " Java",
    c: " C#",
    d: " Python"
  },
  {
    quostion: "OSI modelinin tarmaq júzesi qanday funktsiyalardı atqaradı?",
    a: "Maǵlıwmatlardı uzatıw marshrutlarini optimalın anıqlaw",
    b: "Windows",
    c: "macOS",
    d: "Android"
  },
  {
    quostion: "OSI modeliniń transport júzesi qanday funktsiyalardı atqaradı?",
    a: " Maǵlıwmatlardı qabıllaw hám uzatıw processinde, maǵlıwmatlardı tolıq hám tuwrı uzatılıwın baqlaw",
    b: "Paydalanıwshı interfeysi",
    c: "Antivirus programması",
    d: "Oyın programması"
  },
  {
    quostion: "OSI modelinin seanslar júzesi qanday funktsiyalardı atqaradı?",
    a: " Baylanısıw seansın jaratıw, baqlaw, aqırıǵa shekem támiyinlew",
    b: "Ǵalabalıq yad",
    c: "SSD",
    d: "HDD"
  },
  {
    quostion: "OSI modeliniń usınıslaw júzesi qanday funktsiyalardı atqaradı?",
    a: " Maǵlıwmatlardı kodlaw hám shifrlaw",
    b: "Programmalıq támiynat",
    c: "Mashqalalardi sheshiw",
    d: "Programmalıq qollanba"
  },
  {
    quostion: "Baylanıs kanalına hám uzatıw ortalıǵına jalǵanıwdı basqarıw wazıypaların OSI modeliniń qaysı júzesi atqaradı?",
    a: " Kanal júzesi",
    b: "Jańa programmalardı ornatadı",
    c: "Sistemanı tezlestiredi",
    d: "Paydalanıwshın qorǵaw etedi"
  },
  {
    quostion: "Maǵlıwmatlardı uzatıw processinde olardı tolıq hám tuwrı uzatılıwın baqlaw wazıypaların OSI modeliniń qaysı júzesi atqaradı?",
    a: " Transport júzesi",
    b: "Brauzer jaratıw",
    c: "Antivirustı jańalaw",
    d: "Elektron pochta jiberiw"
  },
  {
    quostion: "Baylanıs seansın payda etiw, gúzetip turıw hám aqirina shekem  támiyinlep beriw wazıypaların OSI modeliniń qaysı júzesi atqaradı?",
    a: " Seanslar júzesi",
    b: "SQL",
    c: "Python",
    d: "HTML"
  },
  {
    quostion: "Talap etiletuǵın algoritmlar járdeminde maǵlıwmatlardı kodlaw hám shifrlaw wazıypaların OSI modeliniń qaysı júzesi atqaradı",
    a: " Usınıslaw júzesi",
    b: "Tek Microsoft Office",
    c: "Tek brauzerlerde",
    d: "Hesh qanday programmalarda"
  },
  {
    quostion: "OSI modelinin ameliy júzesi qanday funktsiyalardı atqaradı?",
    a: " Klient programmaları menen óz-ara baylanısde bolıw",
    b: " Ethernet kabeli",
    c: " Wi-Fi",
    d: " Bluetooth"
  },
  {
    quostion: "Keltirilgen protokollardıń qaysıları kanal júzesi protokollarına tiyisli?",
    a: "Ethernet, FDDI",
    b: "Fayl menedjeri",
    c: "waqtın belgileytuǵın programma",
    d: "Oyın programması"
  },
  {
    quostion: "Keltirilgen protokollardıń qaysıları fizikalıq úst protokollarına tiyisli",
    a: "10Base-T, 100Base-TX",
    b: "SSD saqlaw jayı",
    c: "Disk feyzi",
    d: "Operativ yad"
  },
  {
    quostion: "Keltirilgen protokollardıń qaysıları usınıslaw júzesi protokollarına tiyisli?",
    a: " SNMP, Telnet",
    b: " Programmalıq kórsetpelerge",
    c: " Paydalanıwshı túsindiriwlerine",
    d: " Jańalanıwlardı"
  },
  {
    quostion: "Keltirilgen protokollardıń qaysıları saenslar júzesi protokollarına tiyisli?",
    a: " RPC, WSP",
    b: " Jańalaw Protokolı adresi",
    c: " Óz-ara járdem klassifikaciyası",
    d: " Saqlaw jayı adresi"
  },
  {
    quostion: "Kompyuter menen sırtqı apparat ortasında maǵlıwmatlardı uzatıw waqtında olardı tuwri uzatılǵanlıǵı qanday tekseriledi?",
    a: " paritet biti tiykarında",
    b: " Paydalanıwshına interfeys jaratıw",
    c: " Sistema resurslarini basqarıw",
    d: " Programmanı ashıw hám jabıw"
  },
  {
    quostion: "Kompyuterden sırtqı apparatqa maǵlıwmatlardı asinxron rejimde uzatip atirganda  bir simvolga tuwrı keletuǵın pakettiń uzınlıǵı qanday boladı?",
    a: " 11 bıt",
    b: "QR kodlar",
    c: "USB flesh-disklar",
    d: "Awızsha sóz menen"
  },
  {
    quostion: "Keltirilgen apparatlardıń qay-qaysısı DCE boladı?",
    a: " Modem",
    b: "Oyın",
    c: "Súwret redaktorı",
    d: "Email programması"
  },
  {
    quostion: "Keltirilgen apparatlardıń qay-qaysısı DTE boladı?",
    a: " kompyuter hám marshrutizator",
    b: "Programmalardı tezlestiriw",
    c: "Sistemaǵa kirgiziw zárúr",
    d: "Tarmaq baylanısın úziw"
  },
  {
    quostion: "Keltirilgen tareplerdin qaysıları,  baylanıs sızıqlarına,  maǵlıwmatlardı uzatıw usıllarına tiyisli xarakteristikalar esaplanadı?",
    a: " ótkeriw qábileti hám isenimliligi",
    b: "Qaǵazda",
    c: "Jazıwlar retinde",
    d: "Grafika retinde"
  },
  {
    quostion: "UTP kabeli degende qaysı kabel túsiniledi?",
    a: " oralma juplıq kabeli",
    b: "Tekst",
    c: "Súwret",
    d: "video"
  },
  {
    quostion: "Modem qanday tiykarǵı wazıypanı atqaradı?",
    a: " signallardı modulyatsiyalaw - demodulyatsiyalaw",
    b: " Programmalardı óshirip jiberiw",
    c: " Kóbirek RAM qosıw",
    d: " Qattı disktı tezlestiriw"
  },
  {
    quostion: "Keltirilgen standartlardıń qay-qaysısı informaciyanı 57600 bit/s tezlikte qabıl etedi hám uzata aladı?",
    a: " v. 92",
    b: "Kompyuterdi júklew arqalı",
    c: "Antivirustı ornatak",
    d: "Sistemanı qayta júklew"
  },
  {
    quostion: "Analog signallardı diskret modulyatsiyalaw nege tiykarlanadı?",
    a: " Naykvist-Kotelnikovlarning hákisleniw teoriyasına",
    b: "URL sertifikatı",
    c: "HTTP sertifikatı",
    d: "FTP sertifikatı"
  },
  {
    quostion: "Kodlardıń qay biri  kernewdiń tórt júzesinen paydalanadı?",
    a: " 2 v1 Q",
    b: "Interfeys",
    c: "Dawıslar",
    d: "Súwret jarlıqları"
  },
  {
    quostion: "Kompyuterden modemga maǵlıwmatlardı uzatıw ushın interfeystiń qaysı jalǵanıw noqatınan paydalanıladı?",
    a: "TXD",
    b: " Antivirus",
    c: " Shifrlaw programması",
    d: " Qattı disk"
  },
  {
    quostion: "Modemnen  kompyuterge maǵlıwmatlardı qabıllaw ushın interfeystiń qaysı jalǵanıw noqatınan paydalanıladı?",
    a: " RXD",
    b: "Betlerdi kóriw",
    c: "Maǵlıwmatlardı júklew",
    d: "Internetge jalǵanıw"
  },
  {
    quostion: "DCE qaysı signal arqalı baylanıs ornatılǵanlıǵı haqqındaǵı xabardı beredi?",
    a: " DSR",
    b: "waqtı menen monıtorıń",
    c: "Malumot kompleksi",
    d: "Programmalastırıw sintaksisi"
  },
  {
    quostion: "Kompyuter menen sırtqı apparat ortasındaǵı interfeys jumısı qanday ámelge asırılǵan?",
    a: " kontroller hám drayver járdeminde",
    b: "Monıtor hám klaviatura",
    c: "Printerdi jalǵaw",
    d: "Internetge jalǵanıw"
  },
  {
    quostion: "Keltirilgen modulyatsiyalardıń qay-qaysısı analog modulyatsiyaǵa tiyisli?",
    a: " chastotalı",
    b: "Programma deregin tekseriń",
    c: "Skanerlashtiring",
    d: "Internetten qollanba alın"
  },
  {
    quostion: "Keltirilgen modulyatsiyalardıń qay-qaysısı diskret modulyatsiyaǵa tiyisli?",
    a: " amplituda-impulsli",
    b: "Uzaq basıp turıw",
    c: "Programma menyusınan óshiriw",
    d: "Qadaǵalaw panelinen óshiriw"
  },
  {
    quostion: "Internet tarmaǵında kommutatsiyalashning qaysı turi isletiledi?",
    a: " paketlerdi kommutatsiyalaw",
    b: "Algoritm",
    c: "Robota programmalastırıw",
    d: "Komanda buyrıqları"
  },
  {
    quostion: "IP-adresssi qanday maydanlardan ibarat?",
    a: " Tarmaq adresssiniń maydanı, bólew adresssiniń maydanı",
    b: "Shifrlaw",
    c: "Buzılǵan fayldı qayta tiklew",
    d: "viruslardan qorǵawlanıw"
  },
  {
    quostion: "Kompyuter tarmaǵınıń aktiv apparatları quramına qaysı apparatlar kiredi?",
    a: " Tarmaq adapteri, koncentrator",
    b: "Erratic",
    c: "Reboot",
    d: "Restart"
  },
  {
    quostion: "Kompyuter tarmaǵınıń passiv apparatları quramına qaysı apparatlar kiredi?",
    a: " Tarmaq kabeli, RJ-45 rozetkası",
    b: "Kompyuter programmasına",
    c: "Saqlaw jayına",
    d: "Oyın programmasına"
  },
  {
    quostion: "Dawıstı sapalı uzatıw ushın dawıslı terbelisler amplitudasini kvantlawda qanday chastota isletiledi?",
    a: " 8000 Gts",
    b: "Súwret retinde",
    c: "Strukturalanbaǵan",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Cifrlı telefon tarmaqlarında 64 Kbit/s ótkezgishlik qábilieti nege tiykarınan tańlap alınǵan?",
    a: " Kotelnikov-Naykvist teoremasi tiykarında",
    b: " Maǵlıwmatlardı operativ uzatıw",
    c: " Keń ámelde barlıq",
    d: " Hár qanday orından kirisiw múmkinshiligi"
  },
  {
    quostion: "MАC-adresss qanday uzunlıqqa iye?",
    a: "48 bit",
    b: "Web-sayt jaratıw",
    c: "Mobil qosımshalardı islep shıǵıw",
    d: "Kompyuter oyınların programmalastırıw"
  },
  {
    quostion: "IPv4 turdegi IP-adresss qanday uzunlıqqa iye?",
    a: "32 bit",
    b: " Excel",
    c: " SQL",
    d: " Python"
  },
  {
    quostion: "192.190.21.254 adresssi IP-adresssleriniń qaysı klassqa tiyisli?",
    a: "C",
    b: "Operativ jańalıqlar",
    c: "Ínteraktiv journalism",
    d: "Paydalanıwshılardan pikir alıw"
  },
  {
    quostion: "B klassındaǵı tarmaq quramına neshe baylam bolıwı múmkin?",
    a: " 65536",
    b: " Hújjetlerdi saqlaw",
    c: " Ańsat uzatıw",
    d: " Pátni kórsetiw"
  },
  {
    quostion: "A klassındaǵı tarmaq quramına neshe baylam bolıwı múmkin?",
    a: " 16777216",
    b: "Paydalanuvchınıń jeke programması",
    c: "Dawıslı programmalar",
    d: "Maǵlıwmatlar bazası"
  },
  {
    quostion: "B klassındaǵı tarmaq maskası qanday bahaǵa iye?",
    a: " 255. 255. 0. 0",
    b: "Xakerlik",
    c: "Malware",
    d: "Jeke maǵlıwmatlardıń joǵalıp ketiwi"
  },
  {
    quostion: "DTE qaysı signal járdeminde ózin islep atirǵanlıǵın hám DCE baylanıs kanalına jalǵanıwı múmkinligi haqqındaǵı xabardı beredi?",
    a: " DCD",
    b: "Súwret hám fayllardı optimallastırıw",
    c: "Keshni isletiw",
    d: "Serverdi jańalaw"
  },
  {
    quostion: "Kabel standartlarınıń qay-qaysısı EIA/TIA-568 A abbreviaturasiga iye?",
    a: " Amerika standartı",
    b: "App Store yamasa Google Play",
    c: "Web-saytlardan júklew",
    d: "Kompyuter arqalı ornatıw"
  },
  {
    quostion: "RS-232 C/v. 24 interfeysinde jalǵawshınıń qaysı modifikatsiyası isletilgen?",
    a: " 9 hám 25 jalǵanıw noqatlarına iye bolǵanı",
    b: "Kúshli parollardı isletiw",
    c: "Jeke maǵlıwmatlardı artıqsha bólesmaslik",
    d: "Antivirus programmaların ornatıw"
  },
  {
    quostion: "Kompyuter tarmaqlarında maǵlıwmatlardı uzatıwda, kodlaw degende ne túsiniledi?",
    a: "maǵlıwmatlardı baylanıs kanalları daǵı tásirinler nátiyjesinde payda bolatuǵın aljasıqlardı anıqlaw hám tuwırlaw múmkin bolatuǵın kóriniske ózgertiw",
    b: " 1 Mbps yamasa kemrek",
    c: " 3-5 Mbps",
    d: " Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Modulyatsiyalawdıń diskret turi nege tiykarlanǵan?",
    a: " signallardı   amplitudasi,  waqıt boyınsha diskretlew",
    b: "Sistema hám programmalardı úzliksiz jańalaw",
    c: "Antivirus programmaların házirgi jaǵdayın saqlaw",
    d: "Paydalanıwshı jawobotini asırıw"
  },
  {
    quostion: "Modulyaciyalawdıń diskret túri nege tiykarlanǵan?",
    a: " signallardı da amplitudasında waqıt boyınsha diskretlew",
    b: "Paydalanıwshı interfeysin jaratıw",
    c: "Oyınlardı islep shıǵıw",
    d: "Internette maǵlıwmat qıdırıw"
  },
  {
    quostion: "Bir bınada yamasa bir-birine jaqın ımaratlarda jaylasqan kompyuterlerde óz-ara informaciya almastırıw imkaniyatın beretuǵın tarmaq qanday ataladı?",
    a: " Lokal tarmaq",
    b: "PDF",
    c: "DOCX",
    d: "TXT"
  },
  {
    quostion: "Lokal tarmaqlarda informaciya almasınıw qanday ámelge asıriladı?",
    a: " baylanıs kabelleri (geyde, telefon sisteması yamasa radiokanal) arqalı",
    b: "Fayllardı saqlaw programması",
    c: "Programmalıq támiynattı ornatıw",
    d: "Mobil telefon platformasi"
  },
  {
    quostion: "Informaciya resursları arqalı kerekli adresske informaciya blokın uzatıw jolin anıqlaw procesi qanday ataladı?",
    a: " Marshrutlaw",
    b: "Photoshop",
    c: "Microsoft Word",
    d: "FTP programması"
  },
  {
    quostion: "Tiyisli mánzil degi informaciyanı saralaw ne dep ataladı?",
    a: " Selektsiyalash",
    b: "Qollanbalar",
    c: "Monıtorlar",
    d: "Klaviaturalar"
  },
  {
    quostion: "Qandayda bir rayon, wálayat yamasa respublika kólemindegi kompyuterlerdi ózinde sáwlelengenlestirgen tarmaq qanday ataladı?",
    a: " Regionlıq tarmaq",
    b: "Hyper Transfer Protocol",
    c: "Hyperlink Transfer Protocol",
    d: "Hypertext Title Protocol"
  },
  {
    quostion: "Dúnyanıń qálegen mámleketindegi kompyuterlerdi ózinde birlestiriw múmkinshiligine iye bolǵan tarmaq ne dep ataladı?",
    a: " Global tarmaq",
    b: "Fayl formatın ózgertiw",
    c: "Fayldı óshiriw",
    d: "Hújjetti baspadan shıǵarıw"
  },
  {
    quostion: "Kompyuter tarmaqlarında maǵlıwmatlar programmalar járdeminde kishi bloklarǵa bólinedi hám bir kompyuterden ekinshisine uzatıladı. Bunday bloklar ne dep ataladı?",
    a: " Paket",
    b: "2000-jıllardıń basında",
    c: "1990 -jıllarda",
    d: "2020 -jıllarda"
  },
  {
    quostion: "Jiberiwshi adresssi, paket qaysı bloktıń qaysı bólegine tiyisliligi haqqındaǵı informaciyalardı ne saqlaydı?",
    a: " Atalıwı (sarlavxa)",
    b: " Oyınlardı basqarıw",
    c: " Paydalanıwshı interfeysin támiyinlew",
    d: " Internetti tezlestiriw"
  },
  {
    quostion: "Tarmaq kanalları arqalı kompyuterlerdi baylanısıwı qaysı usılında maǵlıwmatlar eki tárepke qaray gezek penen, aldın bir tárepke keyin ekinshi tárepke uzatıladı?",
    a: " Yarım dupleks",
    b: "Televidenie",
    c: "Radio",
    d: "Barlıq juwaplar tuwrı"
  },
  {
    quostion: "Sımsız baylanıs kanalı qanda túrlerge bólinedi?",
    a: " Infraqızıl tolqınlar, lazer tolqınlar, radioaloqa",
    b: "Paydalanıwshı parolın",
    c: "Hújjetlerdiń atların",
    d: "Internet bar ekenligi"
  },
  {
    quostion: "Xar bir abonent sisteması birdey kólemde resursların usınıs hám tutınıw etiwi múmkin bolǵan, informaciya sistemasınıń konseptsiyasi qanday ataladı",
    a: " Birden-bir reń arxitekturası",
    b: "Jeke kompyuter tarmaǵı",
    c: "Tikkeley internet jalǵanıwı",
    d: "Mobil telefon baylanısı"
  },
  {
    quostion: "Jergilikli tarmaqtaǵı kóp sanlı paydalanıwshılar ushın faylların basqarıw hám saqlaw funksiyaların qanday server támiyinleydi?",
    a: " Fayl server",
    b: "Keńeytirilgen material",
    c: "Ǵalabalıq tayarlanǵan xabarlar",
    d: "Tosınarlı usınıslar"
  },
  {
    quostion: "Kompyuterlerdi jergilikli tarmaqqa jalǵaw ushın qanday apparat isletiledi?",
    a: " HUB apparatı,",
    b: "video platformasi",
    c: "Oyın saytı bolıp tabıladı",
    d: "Satıp alıw ushın Web-sayt"
  },
  {
    quostion: "Úzip-jalǵawshı. Kompyuterlerdi jergilikli tarmaqqa birlestiriw ushın qanday apparattan paydalanıladı?",
    a: " SWITCH apparatları",
    b: " JPEG, PNG, PDF",
    c: " MP3, WAV, TXT",
    d: " DOCX, XLSX, PPT"
  },
  {
    quostion: "Lokal esaplaw tarmaǵındaǵı kompyuterlerdiń jaylasıwın ańlatiwshı termin qanday ataladı?",
    a: " Tapologiya",
    b: "E-pochta",
    c: "Dawıslı programmalar",
    d: "Grafik dizayn"
  },
  {
    quostion: "Tarmaq tapologiyalarining tiykarǵı túrleri qaysı juwapda kórsetilgen?",
    a: " Juldız, sheńber, shina",
    b: "Tarmaq tezligin kemeytiw",
    c: "Maǵlıwmatlardı shifrlaw",
    d: "Maǵlıwmatlardı urlaw"
  },
  {
    quostion: "Eger kompyuterler bir kabel (segment) boylap jalǵanǵan bolsa, bunday tapologiya ne dep ataladı?",
    a: " Shina",
    b: "Online satıp alıw",
    c: "Social tarmaqlarda reklama",
    d: "Elektron pochta marketingi"
  },
  {
    quostion: "Tarmaqta kompyuterler arasındaǵı aralıq uzaqlasib ketse segment arasına qanday apparat ornatıladı?",
    a: " Repitor (povtoritel)",
    b: "Tek ǵana cifrlı formatda",
    c: "Joqarı tezlikte",
    d: "Hesh qanday platformadan uzatıw múmkin emes"
  },
  {
    quostion: "Eger kompyuterler jalǵanǵan kabel halqa etip jalǵanǵan bolsa, bunday tapologiya qanday ataladı?",
    a: " Sheńber",
    b: " Maǵlıwmatlardı qorǵaw",
    c: " Kompyuter programmaların islep shıǵıw",
    d: " Internet xızmetlerin jaqsılaw"
  },
  {
    quostion: "Juldız tapologiyasining kemshilikleri tómende keltirilgen qaysı juwapda tuwrı kórsetilgen?",
    a: " oraylıq koncentratorning isten shıǵıwı, tarmaqtı jumıs iskerligin toqtatıp qoyadı.",
    b: "Shimdiy baylanıs texnologiyası",
    c: "Maǵlıwmattı offline saqlaw",
    d: "Ata-analar sisteması"
  },
  {
    quostion: "Ámeliy tekshenin  wazıypası nelerden ibarat?",
    a: " Ol tarmaqta ámeliy hám sistemalı programmalardıń óz-ara baylanısın támiyinleydi (paydalanıwshı hám tarmaq ortasında interfeysti támiyinlegen halda ). Bul tekshede ámeliy xızmetler atqarıladı, yaǵnıy : fayllardı uzatıw, olislashgan halda terminalǵa kirisiw, elektron pochta hám taǵı basqa.",
    b: "Fayl menejeri arqalı",
    c: "Internet arqalı",
    d: "Kompaniyalar arxivı"
  },
  {
    quostion: "Fizikalıq teksheniń wazıypası nelerden ibarat?",
    a: " Esaplaw tarmaǵı ortasındaǵı anıq fizikalıq baylanıstı támiyinleydi.",
    b: "Dawıslı muzıkalar prezentaciyası",
    c: "Dawıslı hújjetlerdi tayarlaw",
    d: "Dawıslı oyınlar"
  },
  {
    quostion: "Apparat, programma hám maǵlıwmatlarǵa qayta islew sistemalarına hám de processler yamasa paydalanıwshılardıń óz-ara islewine tiyisli algoritmdı belgileytuǵın jámi qaǵıydalar qanday ataladı?",
    a: " Protokol",
    b: "Kompyuter virusları",
    c: "Teńiz tasqınları",
    d: "Kiberhujumlar"
  },
  {
    quostion: "Baylanıs hizmatlarini kórsetetuǵın, adresslew, marshrutlaw, qatelerdi tekseriw hám qayta jiberiwdi ámelge asırıw sıyaqlı wazıypalardı basqaratuǵın protokollar qanday ataladı?",
    a: " Tarmaq protokolları",
    b: " Windows hám Linux",
    c: " Unix hám Solaris",
    d: " MS-DOS hám Windows"
  },
  {
    quostion: "TCP/IP steki qanday eki tiykarǵı protokoldı óz ishine aladı?",
    a: " TCP (Transmission Control Protocol), IP (Internet Protocol)",
    b: "Microsoft Word",
    c: "Notepad",
    d: "Internet Browsing"
  },
  {
    quostion: "Qaysı protokol izbe-iz fragmentlerge bólingen maǵlıwmatlardı kepillikli jetkiziwge juwap beredi?",
    a: " TCP (Transmission Control Protocol)",
    b: "Belgilerdi tarqatıw",
    c: "Aǵıslardı alınǵan signalǵa aylandırıw",
    d: "Programmalıq támiynattı ornatıw"
  },
  {
    quostion: "Tómende keltirilgenlerden qay-qaysısı gipertekst uzatıwshı protokol?",
    a: " HTTP (Hyper Text Transfer Protocol)",
    b: " Android",
    c: " iOS",
    d: " Windows"
  },
  {
    quostion: "FTP (File Transfer Protocol) qanday protokol?",
    a: " Fayl uzatıwshı protocol",
    b: " vattlarda",
    c: " Tezlikte",
    d: " waqıt menen"
  },
  {
    quostion: "Elektron xat jiberiwshi protokol qaysı juwapda keltirilgen",
    a: " SMTP (Simple Mail Transfer Protocol)",
    b: "Microsoft Excel",
    c: "Dropbox",
    d: "Microsoft Access"
  },
  {
    quostion: "NNTP (News Net Transfer Protocol)",
    a: " Telekonferenciya protokolı",
    b: "Ańsat tahmin etiletuǵın etip",
    c: "Ush hár qıylı belgilerdi isletmaslik arqalı",
    d: "Oqılıwı ańsat bolıwı arqalı"
  },
  {
    quostion: "IP adress ne?",
    a: " Noqatlar menen ajıratılǵan tórt sannan (oktet) ibarat kem ushraytuǵın san. Hár bir san 0-255 aralıǵinda bolıwı kerek.",
    b: "Anglichan tilinde onlayn kurs",
    c: "Biometrik qadaǵalaw",
    d: "Paroldı qayta qayta tiklew procesi"
  },
  {
    quostion: "A klass IP-adressleri qanday aralıqta boladı?",
    a: " 0 den 127 ge shekem",
    b: "Basqarıw protokolı",
    c: "Tezlikti asırıw protokolı",
    d: "Tólewlerdi basqarıw protokolı"
  },
  {
    quostion: "C klass IP-adressleri qanday aralıqta boladı?",
    a: "192 den 223 ke shekem",
    b: "Tuwrı parollar jaratıw",
    c: "Antivirus programmasın ornatıw",
    d: "Sistemanı jańalap turıw"
  },
  {
    quostion: "WEB texnologiyasınıń házirgi kúnde informaciyanı kóriw ushın túrli qurallar bar, olar qanday ataladı?",
    a: " Brauzer",
    b: " Tezlikti asırıw programmaları",
    c: " Antivirus programması",
    d: " Maǵlıwmatlar bazası"
  },
  {
    quostion: "Nolinchi tekshe domenleri neni ańlatadı?",
    a: " Nolinchi tekshe domenleri mudamı tarmaq atların ańlatadı",
    b: "Photoshop",
    c: "Excel",
    d: "FTP programması"
  },
  {
    quostion: "Pochta serverleriniń wazıypaları nelerden ibarat?",
    a: " pochta serveri paydalanıwshılardıń jeke xatların qabıl qılıp alıw hám uzatıwdı hám de olardı jóneltirishni támiyinleytuǵın server. Pochta serverin shólkemlestiriw ushın jeke kompyuterge tiyisli programmalıq támiynattı ornatıw kerek. Pochta - Internette ushırasıwdıń tiykarǵı quralı.",
    b: "Dawıslı programmalastırıw",
    c: "Maǵlıwmatlardı saqlaw",
    d: "Grafika jaratıw"
  },
  {
    quostion: "Maǵlıwmatlardı kompyuter tarmaǵında bir kompyuterden basqasına uzatıw waqtında kompyuter hám baylanıs kanalı jumısın muwapıqlastırıwshı plata formasında jaratılǵan maslastırǵısh qanday ataladı?",
    a: " Tarmaq adapteri (kartası)",
    b: "video júklew",
    c: "Dawıslı xızmetler ushın",
    d: "Telefon programmaların ornatıw"
  },
  {
    quostion: "Shina tapologiyasining abzallıqları qaysı juwapda kórsetilgen?",
    a: " kabel tejaladi, ańsat keńeytiriledi, ápiwayı hám kepillikli",
    b: "Diskta saqlanatuǵın maǵlıwmatlar",
    c: "Internetdegi tezlik",
    d: "Kompyuterdiń tiyisli programmaları"
  },
  {
    quostion: "Juldız tapologiyasining abzallıqları qaysı juwapda kórsetilgen?",
    a: " kompyuterler sanın ańsat kóbeytiw múmkin, oraydan basqarıw hám baqlaw múmkin, qandayda bir kompyuterdiń isten shıǵıwı tarmaqqa tásir etpeydi.",
    b: " Internetge jalǵanıwdı chekleydi",
    c: " Kompyuter qátelerin dúzetedi",
    d: " Antivirus programmaların basqaradi"
  },
  {
    quostion: "Sheńber tapologiyasining abzallıqları",
    a: " barlıq kompyuterler birdey poziciyaǵa iye, paydalanıwshılar sanı úlken axmiyetge iye emes.",
    b: "Gif, BMP, WAV",
    c: "PDF, DOCX, PPT",
    d: "HTML, XML, JSON"
  },
  {
    quostion: "Shina tapologiyasining kemshilikleri tómende keltirilgen qaysı juwapda tuwrı kórsetilgen?",
    a: " kabelni isten shıǵıwı, tarmaq jumısın toqtatadı, maǵlıwmatlardıń kópligi, otkiziw qábiletin pasaytiradi.",
    b: "Jańalıqlardı usınıw",
    c: "Paydalanıwshı pikirlerin inabatqa alıw",
    d: "Ínteraktiv kontent"
  },
  {
    quostion: "Sheńber tapologiyasining kemshilikleri tómende keltirilgen qaysı juwapda tuwrı kórsetilgen?",
    a: " qandayda bir kompyuterdiń isten shıǵıwı tarmaq iskerligin toqtatıp qoyadı, tarmaq konfiguraciyasın ózgertiw tarmaq jumısın toqtatadı.",
    b: "Kesh",
    c: "FTP",
    d: "SSH (Secure Shell)"
  },
  {
    quostion: "Seans tekshesiniń wazıypası nelerden ibarat?",
    a: " Ol eki túrli kompyuterlerdi programmalar járdeminde seans aparıwın támiyinlep beredi. Bul dárejede tómendegiler ámelge asıriladı: qawipsizlik quralların bashqariw; maǵlıwmatlar almasıwın sinxronlaw; úzilis (toqtap qalıw) nátiyjesinde seanstı qaldırıw.",
    b: "Operativ xabarnoma",
    c: "Cifrlı hújjetler",
    d: "Dawıslı programmalar"
  },
  {
    quostion: "Xar bir abonent sisteması birdey kólemde resursların usınıs hám tutınıw etiwi múmkin bolǵan, informaciya sistemasınıń konsepciyasi qanday ataladı",
    a: " Birden-bir reń arxitekturası",
    b: " Google Drive",
    c: " Dropbox",
    d: " OneDrive"
  },
  {
    quostion: "WEB texnologiyasınıń házirgi kúnde informaciyanı kóriw ushın túrli qurallar bar, olar qanday ataladı?",
    a: " Brauzer",
    b: "Statistika platformasi",
    c: "Programmalastırıw tili",
    d: "Cifrlı suwretler menen islew usılı"
  },
  {
    quostion: "Kadrlar izbe-izligin koncentratorlar arqalı ótiwi nátiyjesinde, kadrlar arasındaǵı aralıqtıń qısqarıwı - PVV, kóbi menen qansha bolıwı múmkin?",
    a: " 49 bitli interval",
    b: "Jańalıqlar prezentaciyası",
    c: "Grafik dizayn",
    d: "Operatsion sistemanı jańalaw"
  },
  {
    quostion: "I hám II klass Fast Ethernet texnologiyası tákirarlagichlari nesi menen parıq etedi?",
    a: " Fizikalıq júzesine tiyisli bar portları menen",
    b: "Kompyuterdegi programmalar",
    c: "Paydalanıwshı maǵlıwmatların urlaw",
    d: "Cifrlı maǵlıwmatlar"
  },
  {
    quostion: "Token Ring texnologiyası kadrınıń maksimal uzınlıǵı nege baylanıslı?",
    a: " sheńberdiń islew tezligine",
    b: "Cifrlı esap -kitaplar",
    c: "Grafik dizayn",
    d: "Internette jańalıqlar tarqatıw"
  },
  {
    quostion: "NNTP (News Net Transfer Protocol)",
    a: " Telekonferenciya protokolı",
    b: "Tezlikti asırıw arqalı programmalardı oqıw",
    c: "Kompyuterde fizikalıq tárepten jaylastırılǵan programmalar",
    d: "Paydalanıwshılarǵa kompyuter programmasın basqarıw"
  },
  {
    quostion: "B klass IP-adressleri qanday aralıqta boladı ? 183 soraw)",
    a: " 128 den 191 ge shekem",
    b: "Tezlikti asırıw arqalı programmalardı oqıw",
    c: "128 den 200 ge shekem",
    d: "Paydalanıwshılarǵa kompyuter programmasın basqarıw"
  },
];

answersDB().forEach((item, index) => {
  const container = document.createElement('div')

  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})

// elHtml
const elButton = document.querySelector('#generate')
const elAnswerContent = document.querySelector('.result')
// const elsAnswers = document.querySelectorAll('.js-buttons')
// console.log(elsAnswers);

elAnswerContent.innerHTML = ''
const buttonNumber = []

headerContent()
counter(25)
createSendButton('div', 'button-submit', 'Yakunlash', elAnswerContent)
// When clicked, background changed other color
if(elButton) {
  elButton.addEventListener('click', () => {
    const button = document.createElement('button')
    button.classList.add('button-primary')
    button.textContent = 26

    elAnswerContent.appendChild(button)
  })
}

// Clicker function
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-primary')) {
      evt.target.classList.add('background-color')
    }
  })
}

// Generate 50 answers
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-submit')) {
      elAnswerContent.innerHTML = ''

      headerContent()
      counter(50)
      createSendButton('div',
        'button-submit',
        'Yakunlash',
        elAnswerContent
      )
    }
  })
}


// ------------------========= FUNCTIONS START =======-------------

// BUTTON counter
function counter(count) {
  for(let i = 1; i <= count; i++) {
    buttonNumber.push(i)
    createButton()
  }
}


// CREAT BUTTON FUNCTION
function createButton() {
  const button = document.createElement('button')
    button.classList.add('button-primary', 'js-buttons')
    elAnswerContent.appendChild(button)

  buttonNumber.forEach(item => {
    button.textContent = item
  })
}


// Content header maker
function headerContent() {
  const span = document.createElement('span')
  span.classList.add('answer')

  span.innerHTML = `
    <a href="file/novaya.txt" class="answer__link" target="_blank">Javoblar
    </a>
  `
  elAnswerContent.appendChild(span)
}

// CREATE SEND BUTTON
function createSendButton(div, clasName, text, append) {
  div = document.createElement(div)
  div.classList.add(clasName)
  div.style.textAlign = 'center'
  div.textContent = text
  append.appendChild(div)
}

// ------------------========= FUNCTIONS END =======-------------