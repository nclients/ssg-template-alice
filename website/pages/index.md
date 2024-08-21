---
layout: "ssg-theme-astro/layouts/main.astro"  # This line of code should remain unchanged.
tag: "" #GTM-xxx
googleSiteVerification: "" 
title: "xxx - Best Food Today"
favicon: "favicon.ico"
logo: "logo.png"
primaryColor: "#E7383D" # logo color
secondaryColor: "#ffffff"
primaryColorScheme: "dark" # dark | light
secondaryColorScheme: "light"
cuid: ""
ruid: ""
orderOnlineLink: ""
tableReservationLink: ""
tel: "012-345-6789"

banner:
  text: 
    # - boldText: "🥳 Special Offer"
    - boldText: "20% off cash discount"
    - text: "on xxx"
    - smText: ""
  # add more text...

# header
header:
  logoSize: 45
  textAfterLogo: 
    text: ""
    size: 16
    color: ""
  showTextAfterLogoOnMobile: false
  logoOnMobile: "" # e.g., 'logo.png'. Set a logo for mobile that is different from the desktop.
  
  bgColor: "#ffffff"
  bgOpacity: "1" # 0~1
  menuTextColor: "#000000"
  menu:
    - { text: "Home", link: "/" }
    - { text: "Gallery", link: "#gallery" }
    - { text: "About Us", link: "#about-us" }
    - { text: "Contact Us", link: "#contact-us" }
    - { text: "中文", link: "/zh-cn" }
  addOrderOnlineBtn: false
  orderOnlineBtnInsteadText: ""
  addTableReservationBtn: false
  tableReservationBtnInsteadText: ""
  addTelBtn: true
  telTextColor: "#000000"

  otherBtn1InsteadText: "See MENU & Order"
  otherBtn1Href: ""
  otherBtn2InsteadText: ""
  otherBtn2Href: ""

sections:
# hero
  - type: "hero" 
    id: ""
    height: "100" # Conditionally use only when sectionType is imgBg
    sectionType: "video" # video | imgWithText | imgBg
    bgVideoType: "gjw" # youtube | vimeo | gjw
    bgVideoId: "1gov6sj92av4Zb9OI9K1kKJat1rv1c"
    bgImg: "background_image.webp"
    bgColor: "#000000"
    bgOpacity: "0.2" # 0~1
    title: 
      - "xxx - Best Food Today"
    titleColor: "#ffffff"
    description: 
      - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
    descriptionColor: "#ffffff"
    isTextAlignCenter: true
    # title2: 
    #   - ""
    # title2Color: "#ffffff"
    # description2: 
    #   - ""
    # description2Color: "#ffffff"

    addOrderOnlineBtn: false
    orderOnlineBtnInsteadText: ""
    addTableReservationBtn: false
    tableReservationBtnInsteadText: ""

    btn1Text: ""
    btn1Href: "" 
    btn2Text: "" 
    btn2Href: "" 

    bannerImg: "sample.webp"
    imgPosition: "imgLeft" # imgLeft | imgRight
    bannerMarginTopMobile: 20
    imgRounded: "3xl" # sm | md | lg | xl | 2xl | 3xl | full
    imgEffect: "hoverRotate" #hoverRotate
   
    bottomRounded: "3xl" # sm | md | lg | xl | 2xl | 3xl | full
    # bottomInfo: "We offer Takeout"

# Video
  - type: "video"
    id: ""
    title: 
      - "Lorem ipsum dolor sit amet"
    description: 
      - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" 
    videoType: "gjw" # vimeo | gjw | youtube
    videoId: 
      - "1gov6sj92av4Zb9OI9K1kKJat1rv1c"
      - "1gov6sj92av4Zb9OI9K1kKJat1rv1c"
    isOnlyDisplayOnMobile: false

# Gallery  
  - type: "gallery"
    id: "gallery"
    mode: 3 # 1 - 3
    bgImg: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title: 
      - "Lorem ipsum dolor sit amet"
    titleColor: "#000000"
    description: 
      - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    descriptionColor: "#333333"
    folderPath: "gallery"
    showImgName: true # true | false
    imgNameColor: "#000000"
    menuItemImgRounded: "3xl" # sm | md | lg | xl | 2xl | 3xl | full

# textBlock - only title
  - type: "textBlock" 
    id: "about-us"
    bgImg: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title: 
      - "About Us"
    titleColor: "#000000"
    description: 
      - "A Chinese restaurant ..."
    descriptionColor: ""

# feature - imgWithText
  - type: "feature" 
    noMarginTop: true
    id: ""
    height: "100" # Conditionally use only when sectionType is imgBg
    sectionType: "imgWithText" # video | imgWithText | imgBg
    title: 
      - "Lorem ipsum dolor sit ame"
    titleColor: "#000000"
    description: 
      - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    descriptionColor: "#000000"

    addOrderOnlineBtn: false
    orderOnlineBtnInsteadText: ""
    addTableReservationBtn: false
    tableReservationBtnInsteadText: ""

    btn1Text: "" 
    btn1Href: "" 
    btn2Text: "" 
    btn2Href: "" 

    bannerImg: "sample.webp"
    imgPosition: "imgLeft" # imgLeft | imgRight
    bannerMarginTopMobile: 20
    imgRounded: "3xl" # sm | md | lg | xl | 2xl | 3xl | full

# feature - map
  - type: "feature" 
    id: ""
    noMarginTop: false
    sectionType: "imgWithText" # video | imgWithText | imgBg
    title: 
      - "Store 2 : Washington St"
    titleColor: "#000000"
    description: 
      - "Opening Hours: "
      - "Mon-Fri 8:30 AM-8:00 PM, Sat-Sun 9:00 AM-8:30 PM"
    descriptionColor: "#000000"

    addOrderOnlineBtn: true
    orderOnlineBtnInsteadText: ""
    addTableReservationBtn: true
    tableReservationBtnInsteadText: ""
    showOtherBtn: true
    btn1Text: "Order online from Washington St Store" 
    btn1Href: "#" 
    btn2Text: "" 
    btn2Href: "" 

    map: true
    url: "https://maps.app.goo.gl/HDDb5yFih4S8TmDe7"
    iframeUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d197.0491990412703!2d-122.4063506!3d37.7950269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815e4be59617%3A0x87622e118f7e38a2!2sHon%E2%80%99s%20Wun-Tun%20House!5e0!3m2!1sen!2sjp!4v1722232541079!5m2!1sen!2sjp"
    addTelBtn: true
    tel: "12345678"
    telInsteadText: "Call: (123) 456-7890"
    tel2: "876543210" # if there are two phone numbers
    tel2InsteadText: "Call: (876) 543-2100"
    getDirectionBtnInsteadText: ""
    imgPosition: "" # imgLeft | imgRight




# textBlock 
  - type: "textBlock" 
    id: "about-us"
    bgImg: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title: 
      - "About Us"
    titleColor: "#000000"
    description: 
      - "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    descriptionColor: "#000000"

# textBlock - Information
  - type: "textBlock" 
    noMarginTop: false
    id: ""
    bgImg: "sample.webp"
    bgColor: "#000"
    bgOpacity: "0.6" # 0~1
    title: 
      - "NEW! Online Ordering"
    titleColor: "#ffffff"
    description: 
      - "Online ordering NOW enabled for pick-up. Just tell us what you want and we'll prepare it as fast as we can. All orders are manually confirmed by us directly. Find out in real-time when your food is ready. All orders are manually confirmed by us in real-time. Watch on-screen when your food is ready for pickup."
    descriptionColor: "#ffffff"
  
# map  
  - type: "map"
    noMarginTop: true
    id: "contact-us"
    mode: "fullWidth" # full-width | ...
    url: "https://maps.app.goo.gl/Kqk8pwJxqrkELa2a9"
    iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.782295865214!2d-121.98282168869802!3d37.30029317199242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbb7733ebcbf%3A0x30270741189d8d03!2sSweetHome%20Kitchen!5e0!3m2!1sen!2sus!4v1722820862843!5m2!1sen!2sus"
    addTelBtn: true
    tel: ""
    telInsteadText: ""
    tel2: "" # if there are two phone numbers
    tel2InsteadText: ""
    getDirectionBtnInsteadText: ""
 
 # The modal will only appear once within 30 minutes."
  - type: "modal" 
    bgColor: "#333"
    bgOpacity: "0.1" # 0~1
    title: 
      - "🎁 Special Offers"
    titleColor: "#FF2D2F"
    titleSize: 24
    description: 
      - "20% off cash discount on frozen handmade dumplings. 10% off cash discount on family meal takeout. Free rice with lunch. Delivery available."
    descriptionColor: ""
    descriptionSize: 16
    imgName: "special_offer.webp"
    imgAlt: "20% off cash discount on frozen handmade dumplings. 10% off cash discount on family meal takeout. Free rice with lunch. Delivery available."
    imgHref: ""
    buttonText: ""

footer:
  mode: 1 # 1
  noMarginTop: true
  bgImg: ""
  bgColor: "#f3f4f6"
  bgOpacity: "1" # 0~1
  textColor: "#000000" # default white

  openingHoursInsteadText: ""
  openingHours: 
    - "Monday:"
    - "11:00 AM - 2:30 PM, 5:00 PM - 7:30 PM"
    - "Tuesday - Sunday:"
    - "11:00 AM - 2:30 PM, 5:00 PM - 8:30 PM"
  
  isLogo: true
  logoSize: 60
 
  menu:
    - { text: "Home", link: "/" }
    - { text: "Gallery", link: "#gallery" }
    - { text: "About Us", link: "/#about-us" }
    - { text: "Contact Us", link: "/#contact-us" }
    - { text: "中文", link: "/zh-cn" }

  FB: false
  FBLink: ""
  IG: false
  IGLink: ""
  X: false
  XLink: ""
  youtube: false
  youtubeLink: ""
  yelp: false
  yelpLink: ""
  doorDash: false
  doorDashLink: ""
  uberEats: false
  uberEatsLink: ""

  acceptedPaymentMethodsInsteadText: ""
  paymentMethod: "applePay,visa,amex,alipay,mastercard" # alipay,applePay,cash,discover,googlePay,jcb,maestro,mastercard,stripe,unionPay,visa,weChatPay,payPal

  # at a minimum, please make sure to include the meta description.
seo:
  metaTitle: "" 

  metaDescription: "A Chinese restaurant located at 1312 Saratoga Ave, San Jose, CA, offers Jiangsu and Zhejiang dishes. We offer takeout and delivery."

  keywords: "" # steak, restaurant, fine dining, New York

  img: "https://www.sweethomekitchensj.com/gallery/Salted%20duck.webp" # https://example.com/photos/1x1/photo.jpg

  thisPageUrl: "https://www.sweethomekitchensj.com/" # https://example.com/

  locale: "en_US" # zh_TW | zh_CN | ja_JP

  canonicalHref: "https://www.sweethomekitchensj.com/" # https://example.com/

  name: "Sweet Home Kitchen 家之味" # restaurant name

  images:
    - "https://www.sweethomekitchensj.com/gallery/Shanghai Pork Ribs.webp"  # https://example.com/photos/1x1/photo.jpg
    - "https://www.sweethomekitchensj.com/gallery/Shu Style Gold Pomfret.webp"  # https://example.com/photos/1x1/photo.jpg
    - "https://www.sweethomekitchensj.com/gallery/SweetHome Kitchen 家之味5.webp"  # https://example.com/photos/1x1/photo.jpg
  
  address:
    streetAddress: "1312 Saratoga Ave" # 148 W 51st St
    addressLocality: "San Jose" # New York
    addressRegion: "CA" # NY
    postalCode: "95129" # 10019
    addressCountry: "US" # US

  review:
    ratingValue: "4.6" #4.5
    bestRating: "5" # 5
    authorName: "Google Review" # Google Review
    reviewType: "Organization" # Organization. Google Review ->"Organization", 

  # review:
  #   ratingValue: "4.5"
  #   bestRating: "5"
  #   authorName: "Yelp"
  #   reviewType: "Organization" # Yelp 是一个组织，因此设置为 Organization

  # review:
  #   ratingValue: "4.9"
  #   bestRating: "5"
  #   authorName: "John Doe"
  #   reviewType: "Person"

  geo:
    latitude: 37.30051526803661 # 40.761293
    longitude: -121.98031741934436 # -73.982294
  url: "" # https://www.example.com

  telephone: "+1-408-216-0979" # +1212345678

  servesCuisine: ["Chinese", "Jiangsu and Zhejiang dishes"]

  priceRange: "$$" # $,$$,$$$,$$$$. $->Inexpensive, $$->Moderate, $$$->Expensive, $$$$->Luxury

  openingHours:
  - dayOfWeek:
      - "Monday"
    opens: "11:00"
    closes: "14:30"
  - dayOfWeek:
      - "Monday"
    opens: "17:00"
    closes: "19:30"
  - dayOfWeek:
      - "Tuesday"
      - "Wednesday"
      - "Thursday"
      - "Friday"
      - "Saturday"
      - "Sunday"
    opens: "11:00"
    closes: "14:30"
  - dayOfWeek:
      - "Tuesday"
      - "Wednesday"
      - "Thursday"
      - "Friday"
      - "Saturday"
      - "Sunday"
    opens: "17:00"
    closes: "20:30"
   
  menu: "https://www.sweethomekitchensj.com/" # https://example.com/

  # acceptsReservations: true # true or false

  hasMenu: "https://www.sweethomekitchensj.com/" # https://crabbynewark.com/full-menu

  starRating:
    ratingValue: "4.6" # 4.5
    bestRating: "5" # 5
    author: "Google Review" # Michelin Guide, Google Review
    authorType: "organization" #person,organization

  currenciesAccepted: "USD" # USD
  
  paymentAccepted: "Cash, American Express, Apple Pay, MasterCard, Visa"

  hasMenuSection:
    - name: "南京风味 Nanjing Dish" # Appetizers
      image: "https://www.sweethomekitchensj.com/gallery/Salted%20duck.webp"
      description: "Experience the authentic taste of Nanjing cuisine, known for its rich flavors and delicate preparation methods."
      hasMenuItem:
        - name: "N1 南京烤鸭（半只） Nanjing Roasted Duck (half, limited qty)"
          description: "Delicious roasted duck with special seasoning."
          price: "25.95"
          image: "https://www.sweethomekitchensj.com/gallery/006%20SweetHome%20Kitchen%20%E5%AE%B6%E4%B9%8B%E5%91%B311.webp"
        - name: "N2 金陵盐水鸭(半只) Nanjing Salted Duck(Half, Limited qty)"
          description: "Tender salted duck, a classic dish."
          price: "19.95"
          image: "https://www.sweethomekitchensj.com/gallery/Salted%20duck.webp"
    - name: "招牌特色菜 House Special" # Main Courses
      hasMenuItem:
        - name: "T1 爆炒腰花(辣/不辣) Stir Fried Pork Kidney(Spicy/Non Spicy)"
          description: "Stir-fried pork kidney cooked with spices."
          price: "18.95"
          image: ""
        - name: "T2 美极腰花 Special pork kidney"
          description: "A special recipe for stir-fried kidney."
          price: "18.95"
          image: ""
    - name: "前菜 Appetizer" # Appetizers
      hasMenuItem:
        - name: "A1 特色黄瓜 House Special Cucumber"
          description: "Crisp cucumbers with house dressing."
          price: "8.95"
          image: ""
        - name: "A2 剁椒皮蛋 Pepper And Century Eggs"
          description: "Century eggs topped with spicy sauce."
          price: "8.95"
          image: ""
    - name: "海鲜系列 Seafood" # Main Courses
      hasMenuItem:
        - name: "S2 椒盐鱼片 Salt Pepper Fish Filet"
          description: "Crispy fish fillet seasoned with salt and pepper."
          price: "16.95"
          image: ""
        - name: "S1 水煮鱼片 Sichuan Poached Spicy Fish Filet"
          description: "Spicy poached fish fillet in Sichuan style."
          price: "17.95"
          image: ""
        
  offers:
    - name: "20% off cash discount on frozen handmade dumplings"
      description: "Enjoy a 20% discount when you pay with cash for our frozen handmade dumplings."
      priceCurrency: "USD"
      price: "varies"
      image: ""
    - name: "10% off cash discount on family meal takeout"
      description: "Get 10% off when you pay with cash for family meal takeout."
      priceCurrency: "USD"
      price: "varies"
      image: ""
    - name: "Family Set: Any 3 dishes for $40"
      description: "Choose any 3 dishes for just $40, includes free rice."
      priceCurrency: "USD"
      price: "40"
      image: ""
    - name: "Free rice with lunch"
      description: "Receive free rice with any lunch order."
      priceCurrency: "USD"
      price: "0"
      image: ""
      
---
<!-- hello world -->