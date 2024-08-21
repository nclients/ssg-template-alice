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
  metaDescription: ""
  keywords: "" # steak, restaurant, fine dining, New York
  img: "" # https://example.com/photos/1x1/photo.jpg
  thisPageUrl: "" # https://example.com/
  locale: "" # zh_TW | zh_CN | ja_JP
  canonicalHref: "" # https://example.com/
  name: "" # restaurant name
  images:
    - ""  # https://example.com/photos/1x1/photo.jpg
    - ""  # https://example.com/photos/1x1/photo.jpg
    - ""  # https://example.com/photos/1x1/photo.jpg
  # address:
  #   streetAddress: "" # 148 W 51st St
  #   addressLocality: "" # New York
  #   addressRegion: "" # NY
  #   postalCode: "" # 10019
  #   addressCountry: "" # US


  review:
    ratingValue: "" #4.5
    bestRating: "" # 5
    authorName: "" # Google Review
    reviewType: "" # Organization. Google Review ->"Organization", 

  # review:
  #   ratingValue: "4.5"
  #   bestRating: "5"
  #   authorName: "Yelp"
  # reviewType: "Organization" # Yelp 是一个组织，因此设置为 Organization

  # review:
  #   ratingValue: "4.9"
  #   bestRating: "5"
  #   authorName: "John Doe"
  # reviewType: "Person"


  geo:
    latitude: # 40.761293
    longitude: # -73.982294
  url: "" # https://www.example.com


  telephone: "" # +1212345678
  servesCuisine: "" # Chinese, American OR ["American", "Italian", "Chinese", "Mexican"]
  priceRange: "" # $,$$,$$$,$$$$. $->Inexpensive, $$->Moderate, $$$->Expensive, $$$$->Luxury
  # openingHours:
  #   - dayOfWeek:
  #       - "Monday"
  #       - "Tuesday"
  #     opens: "11:30"
  #     closes: "22:00"
  #   - dayOfWeek:
  #       - "Wednesday"
  #       - "Thursday"
  #       - "Friday"
  #     opens: "11:30"
  #     closes: "23:00"
  #   - dayOfWeek: "Saturday"
  #     opens: "16:00"
  #     closes: "23:00"
  #   - dayOfWeek: "Sunday"
  #     opens: "16:00"
  #     closes: "22:00"
  menu: "" # https://example.com/
  # acceptsReservations: true # true or false
  hasMenu: "" # https://crabbynewark.com/full-menu
  starRating:
    ratingValue: "" # 4.5
    bestRating: "" # 5
    author: "" # Michelin Guide
  currenciesAccepted: "" # USD
  paymentAccepted: ""  # Cash, Credit Card, Debit Card, Apple Pay, Google Pay, PayPal, Bitcoin, Bank Transfer, Check, Mobile Payment, Contactless Payment, Gift Card, Invoice
  # hasMenuSection:
  #   - name: "" # Appetizers
  #     hasMenuItem:
  #       - name: "" # Garlic Bread
  #         description: "" # Toasted bread with garlic and herbs
  #         price: "" # 5.99
  #       - name: "" # Bruschetta
  #         description: "" # Grilled bread with tomatoes and basil
  #         price: "" # 7.99
  #   - name: "" #Main Courses
  #     hasMenuItem:
  #       - name: "" # Grilled Salmon
  #         description: "" # Fresh salmon grilled to perfection
  #         price: "" # 18.99
  #       - name: "" # Steak
  #         description: "" # Juicy steak cooked to order
  #         price: "" # 25.99
  
---
<!-- Powered by Best Food Today -->