import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        tr: {
            translations: {
                //Modal Account
                modalaccountheader: 'Hesap Bilgilerim',
                modalaccountnamesurname: 'İsim Soyisim :',
                modalaccountemail: 'E-posta adresi :',
                modalaccountnewpassword: 'Yeni Şifre :',
                modalaccountnewpasswordagaing: 'Yeni Şifre tekrar:',
                modalaccountchangepassword: 'Şifremi değiştir',

                //modalLeaveWarning
                modalleavewarningheader: 'Çıkış yapmak istediğinize emin misiniz ?',
                modalleavewarningcontent1: 'Yaptığınız değişiklikler kaydedilmemiş olabilir.Egzersiz listenizde değişiklik yaptıysanız "Egzersiz Listem" sayfasında bulunan',
                modalleavewarningsavebutton: 'Kaydet',
                modalleavewarningcontent2: 'butonunu tıklamalısınız.Aksi halde egzersizlerinizi kaybedeceksiniz.',
                modalleavewarningexitbutton: 'Çıkış Yap',
                modalleavewarninggoback: 'Geri Dön',

                //mottoarea
                mottotext: 'Kendi egzersiz programını oluştur...',

                //linksarea
                linksareahomepage: "Anasayfa",
                linksareabuildexercise: "Egzersiz Oluştur",
                linksareaexerciselist: "Egzersiz Listem",
                linksarearegister: 'Hesap Oluştur',
                linksarealogout: "Çıkış Yap",
                linksarealogin: "Giriş Yap",

                //builder
                builderheader: "Egzersiz Oluştur",
                builderarea: "Çalışacağınız hareket hangi bölge için ?",
                buildername: "Çalışacağınız hareketin ismi nedir?",
                builderset: "Hareketi kaç set çalışacaksınız ?",
                builderrepeat: "Hareketi kaç tekrar yapacaksınız?",
                buildervideo: "Çalışacağınız hareketin YouTube video linki :",
                builderaddbutton: "Egzersizlerime Ekle",
                arm: "Kol",
                shoulder: "Omuz",
                chest: "Göğüs",
                back: "Sırt",
                leg: "Bacak",
                abdominal: "Karın",
                modalerrorcontent: "Gerekli alanları doldurmalısınız!",
                modalerrorcontent2: "Not: Video linki eklemek zorunlu değildir.",

                //list
                joyride1: "Oluşturduğunuz egzersizleri yönetebileceğiniz ekran burasıdır.",
                joyride2: "Görüntüle butonunu kullanarak eklemiş olduğunuz egzersizin detaylı bilgilerini görebilirsiniz.",
                joyride3: "Düzenle butonu ile eklemiş olduğunuz egzersizin özelliklerini değiştirebilirsiniz.",
                joyride4: "Tümünü sil butonunu tıklayarak listenizi temizleyip yeniden oluşturmaya başlayabilirsiniz.",
                joyride5: "Listenizi indir butonunu kullanarak .html uzantılı olarak indirip,dilediğiniz cihazda kullanabilirsiniz.",
                joyride6: "Kullanıcı girişi yaptıysanız,listenizde düzenleme yaptıktan sonra burada belirecek olan 'Kaydet' butonunu kullanarak yaptığınız değişiklikleri kalıcı olarak kaydedebilirsiniz.",
                localeback: "Geri",
                localeclose: "Kapat",
                localelast: "Son",
                localenext: "İleri",
                localeskip: "Atla",
                //modalone
                modalonexercisename: "Egzersiz ismi :",
                modaloneshowvideolink: "Video Linkini Göster",
                modalonemusclearea: "Kas Bölgesi :",
                modaloneset: "Set Sayısı : ",
                modalonerepeat: "Set Başına Tekrar Sayısı :",
                modaloneclosebutton: "Kapat",
                //modaltwo
                modaltwoheader: "Düzenle",
                modaltwosavechangebutton: "Değişikliği Kaydet",
                modaltwoclosebutton: "Kapat",
                //modaldeleteall
                modaldeleteallcontent: "Tüm egzersizlerinizi silmek istediğinize emin misiniz?",
                modaldeleteallapprovebutton: "Onayla",
                modaldeletealldenybutton: "Vazgeç",
                //functionals
                functionalsdownloadbutton: "İndir",
                functionalssavebutton: "Kaydet",
                functionalshelpbutton: "Yardım",
                //thead
                theadarea: "Bölge",
                theadname: "İsim",
                theadset: "Set",
                theadrepeat: "Tekrar",
                theadvideo: "Video",
                addnew: "... Yeni egzersiz ekle ...",

                //sidebar
                //sidebarthead
                sidebartheadexercisename: "Egzersiz adı",
                sidebartheadexercisearea: "Bölge",
                sidebarwarn: "Henüz egzersiz eklememiş gibi görünüyorsunuz.",
                sidebaraddnow: "Hemen ekle",

                //generalplaceholders
                example: "örn :",
                atleastsixchars: "En az 6 haneli bir şifre giriniz",
                retypepassword: "Şifrenizi tekrar giriniz",

                //register
                registerheader:"Hesap Oluştur",
                registername:"İsim :",
                registersurname:"Soy İsim :",
                registeremail:"E-posta adresi :",
                registerpassword:"Şifre :",
                registerrepassword:"Şifre tekrar :",
                registersubmitbutton:"Kayıt Ol",
                registeralreadyhave:"Zaten bir hesabınız var mı ?",
                registerlogin:"Giriş Yap",

                //login
                loginheader:"Giriş Yap",
                loginemail:"E-posta adresi :",
                loginpassword:"Şifre :",
                loginsubmitbutton:"Giriş Yap",
                loginnohaveaccount:"Bir hesabınız yok mu ?",
                logincreateaccount:"Hesap Oluştur",
                loginforgotpassword:"Şifremi Unuttum",
                forgotheader:"Şifremi Unuttum",
                forgotcontent:"Lütfen sistemde kayıtlı olan e-posta adresinizi giriniz",
                forgotsubmitbutton:"Şifremi Sıfırla",

                //appjs
                //toasts
                toastdeleted:"Silindi",
                toastsaved:"Kaydedildi",
                toastdownload:" adet egzersiz indirilecek",
                toastnoexercise:"İndirebilmek için listenize en az 1 adet egzersiz eklemelisiniz !",
                toastresetpassword:"Sıfırlama Linki e-posta adresinize gönderildi",
                toastchangepassword:"Şifreniz başarıyla değiştirildi",
                 //commons
                 gotop:"Başa Dön",
                 seeall:"Tümünü gör ve düzenle",

                 //home
                 //slide1
                 slide1header:"Nasıl kullanılır?",
                 slide1subheader:"Nasıl egzersiz oluştururum?",
                 slide1content:"'Egzersiz Oluştur' butonuna tıklayıp,hemen oluşturmaya başlayabilirsin. Gerekli alanları doldurduktan sonra 'Egzersizlerime Ekle' butonuna basman yeterli.Eklediğin egzersiz, 'Egzersiz Listem' bölümünde görüntülenir.Detaylar için videoyu izle! 'Egzersiz listem' bölümünün nasıl kullanıldığını öğrenmek için yana kaydır... ",
                 //slide2
                 slide2subheader:"'Egzersiz Listem' nasıl kullanılır?",
                 slide2content1:"Eklediğin tüm egzersizlerin,'Egzersiz Listem' bölümünde görüntülenir.Bu bölümde en sağdaki",
                 slide2content2:"'görüntüle",
                 slide2content3:",düzenle",
                 slide2content4:"ve sil",
                 slide2content5:"'butonlarını kullanarak dilediğin gibi düzenleme yapabilirsin.En üstte bulunan 'Tümünü sil' butonunu kullanarak listeni baştan yaratmaya başlayabilirsin. Listen hazır mı ? Listeni nasıl indirip dilediğin yerde kullanabileceğini öğrenmek için yana kaydır... ",
                 //slide3
                 slide3subheader:"Listemi nasıl indiririm ?",
                 slide3content1:"Tüm egzersizlerini listene ekledin mi ? O halde hazır görünüyorsun. Hemen 'Egzersiz Listem' sayfasına gidip sağ üst köşede bulunan 'indir",
                 slide3content2:"' butonuna tıklayıp egzersiz listenin '.html' uzantılı bir kopyasını indirebilirsin! İndirdiğin dosyayı istediğin cihazda açabilirsin. İndirdiğin dosya aşağıdaki gibi görünecek :",

                 //downloadable
                 downloadablearea:"Bölge",
                 downloadablename:"İsim",
                 downloadableset:"Set",
                 downloadablerepeat:"Tekrar",
                 downloadablevideo:"Video",

                  //firebaseerrors
                 registererror:"*Daha önce kayıt olmadığınız bir e-posta adresi ile kayıt olmalısınız. *En az 6 haneli bir şifre girmelisiniz",
                 loginerror:"*E-postanızı veya şifrenizi yanlış girdiniz.",
                 loginresetpassword:"Sistemde kayıtlı olan e-posta adresinizi giriniz.",
                 changepassworderror:"Yeni şifreniz en az 6 haneli olmalıdır."

            




            }
        },
        en: {
            translations: {
                //Modal Account
                modalaccountheader: 'My Account',
                modalaccountnamesurname: 'Name and Surname :',
                modalaccountemail: 'E-mail address :',
                modalaccountnewpassword: 'New Password:',
                modalaccountnewpasswordagaing: 'Re-enter New Password:',
                modalaccountchangepassword: 'Change Password',

                //modalLeaveWarning
                modalleavewarningheader: 'Are you sure you want to log out ?',
                modalleavewarningcontent1: 'The changes you have made may not have been saved. If you have made changes to your exercise list, you must click the',
                modalleavewarningsavebutton: 'Save',
                modalleavewarningcontent2: 'button. Otherwise, you will lose your exercises.',
                modalleavewarningexitbutton: 'Log Out',
                modalleavewarninggoback: 'Cancel',

                //mottoarea
                mottotext: 'Create your own workout...',

                //linksarea
                linksareahomepage: "Homepage",
                linksareabuildexercise: "Create Exercise",
                linksareaexerciselist: "My Exercises",
                linksarearegister: 'Register',
                linksarealogout: "Log Out",
                linksarealogin: "Log In",

                //builder
                builderheader: "Create Exercise",
                builderarea: "Which muscle area ?",
                buildername: "Name of the exercise ?",
                builderset: "How many sets ?",
                builderrepeat: "How many repeats each set ?",
                buildervideo: "YouTube video link of your exercise :",
                builderaddbutton: "Add to List",
                arm: "Arm",
                shoulder: "Shoulder",
                chest: "Chest",
                back: "Back",
                leg: "Leg",
                abdominal: "Abdominal",
                modalerrorcontent: "You must fill in the required fields!",
                modalerrorcontent2: "Note: Adding a video link is not mandatory.",

                //list
                joyride1: "This is the screen where you can manage the exercises you have created.",
                joyride2: "You can see the detailed information of the exercise you have added by using the View button.",
                joyride3: "You can change the properties of the exercise you have added with the Edit button.",
                joyride4: "You can clear and start rebuilding your list by clicking the delete all button.",
                joyride5: "You can download your list as a .html extension using the download button and use it on any device.",
                joyride6: "If you are logged in, you can save your changes permanently by using the 'Save' button that will appear here after editing your list.",
                localeback: "Back",
                localeclose: "Close",
                localelast: "Last",
                localenext: "Next",
                localeskip: "Skip",
                //modalone
                modalonexercisename: "Exercise Name:",
                modaloneshowvideolink: "Show video link",
                modalonemusclearea: "Target Area :",
                modaloneset: "Sets : ",
                modalonerepeat: "Repeats per set :",
                modaloneclosebutton: "Close",
                //modaltwo
                modaltwoheader: "Edit",
                modaltwosavechangebutton: "Save Changes",
                modaltwoclosebutton: "Close",
                //modaldeleteall
                modaldeleteallcontent: "Are you sure you want to delete all your workouts?",
                modaldeleteallapprovebutton: "Confirm",
                modaldeletealldenybutton: "Cancel",
                //functionals
                functionalsdownloadbutton: "Download",
                functionalssavebutton: "Save",
                functionalshelpbutton: "Help",
                //thead
                theadarea: "Muscle",
                theadname: "Exercise",
                theadset: "Set",
                theadrepeat: "Repeat",
                theadvideo: "Video",
                addnew: "... Add exercise ...",

                //sidebar
                //sidebarthead
                sidebartheadexercisename: "Exercise",
                sidebartheadexercisearea: "Muscle",
                sidebarwarn: "It looks like you haven't added any exercises yet.",
                sidebaraddnow: "Add Now",

                //generalplaceholders
                example: "ex :",
                atleastsixchars: "Enter a password of at least 6 characters",
                retypepassword: "Re-enter your password",

                //register
                registerheader:"Create an Account",
                registername:"Name :",
                registersurname:"Surname :",
                registeremail:"E-mail address :",
                registerpassword:"Password :",
                registerrepassword:"Re-type password :",
                registersubmitbutton:"Register",
                registeralreadyhave:"Already have an account ?",
                registerlogin:"Log In",

                  //login
                  loginheader:"Log In",
                  loginemail:"E-mail adress :",
                  loginpassword:"Password :",
                  loginsubmitbutton:"Log In",
                  loginnohaveaccount:"Don't have an account ?",
                  logincreateaccount:"Create an Account",
                  loginforgotpassword:"Forgot your password ?",
                  //forgotpassword
                  forgotheader:"Reset Password",
                  forgotcontent:"Please enter your registered e-mail address",
                  forgotsubmitbutton:"Reset Password",

                        //appjs
                //toasts
                toastdeleted:"Deleted",
                toastsaved:"Saved",
                toastdownload:" exercises will be dowloaded",
                toastnoexercise:"You must add at least 1 exercise to your list to be able to download it!",
                toastresetpassword:"Reset email sent to your address",
                toastchangepassword:"Your password has been successfully changed",
                //commons
                gotop:"Go Top",
                seeall:"View and edit all",

                //home
                 //slide1
                 slide1header:"How to use ?",
                 slide1subheader:"How do I create a workout?",
                 slide1content:"You can start creating now by clicking the 'Create Exercise' button. After filling in the required fields, just press the 'Add to List' button. The exercise you added will be displayed in the 'My Exercises' section. Watch the video for details! Scroll to learn how to use the 'My Exercises' section...",
                 //slide2
                 slide2subheader:"How to use My Exercises",
                 slide2content1:"All the exercises you add are displayed in the 'My Exercises' section.In this page you can use",
                 slide2content2:"'View",
                 slide2content3:",Edit",
                 slide2content4:"and Delete",
                 slide2content5:"'buttons.You can edit your list as you wish and also you can start creating your list from scratch by using the 'Delete all' button at the top. Is your list ready? Swipe to learn how to download your list and use it wherever you want...",
                 //slide3
                 slide3subheader:"How do I download my list?",
                 slide3content1:"Have you added all your exercises to your list? Then you look ready. Go to the 'My Exercises' page now and click the 'download",
                 slide3content2:"' button in the upper right corner and get an '.html'file.You can open the downloaded file on any device you want! The downloaded file will look like below :",
                 
                 //downloadable
                 downloadablearea:"Muscle",
                 downloadablename:"Exercise",
                 downloadableset:"Set",
                 downloadablerepeat:"Repeat",
                 downloadablevideo:"Video",

                 //firebaseerrors
                 registererror:"*You must register with an e-mail address that you have not registered before. *You must enter a password of at least 6 digits",
                 loginerror:"*Wrong e-mail or password.",
                 loginresetpassword:"User not found.",
                 changepassworderror:"New password should at least 6 characters"

            }
        }
    },
    fallbackLng: "tr",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
})

export default i18n;