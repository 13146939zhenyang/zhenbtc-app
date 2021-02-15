a.	What did you find most challenging? How did u overcome it?
    Ans. From my perspective, just finished the demo is not difficult, the challenging part is to find a way to make it safty, expandably and can meet actual users' needs. Also, the components structural design and UI design are also difficult to me.
    I tried my best to solve some problems in a limited time, but there are still many unsolved and many things I dont know I dont konw.. and many things I know I dont know but I dont know how to find a way to solve them.
        1. To protect API keys and link, I used the .env file to contains them, and destructed them in priceList component, I should create a api file with api.js in components file to manage all api links, but I am still searching on it.
        2. I divide the pages in 3 parts, the app.js is the enter point of main page, and main page is the entery point of header, price list, and date on the end, each points can be reused.
            2.1 The PriceList title(BTC) through props transpart in brower, that can make the component can be reused.
        3. I should use the media query to finished the responsive design, however, in this demo part, the structure are very clear, so I finished the responsive with sass only. In small devices, the overflow part are scrollable to make sure user can see all the price.
        4. I display all 4 types price of BTC to USD, and fetching data has dely, so I design a loading mask with a loading svg, and use {isloading && <components/ >} to make rendering judgment.
        5. For the UI design, I am really not good at it, so I use http://tool.c7sky.com/webcolor/#character_0  to find color.
        6. I used async await to make sure the code running order.
        7. For deploy part, I just know i need buildpack to help me deploy react project.
        8. However, there are still too many things I can not consider about! Hope get helped!

b.	If taken again, what would you have done better? 
    Ans. In this demo part, there are some bugs. For example, the time zone are different, there are 16 hours inspects, that means, if sydney users check the price before 16:00 in 15/2/2021, the price still are 14/2/2021, but the date part in this demo, I used new Date() function, that would be display sydeny time. If I take again, I will consider that earlier. And render the pricelist and loading mask without transition, the transition part need to use typescript, and I am a freshman to typescrit, if I take it again, I will read typescript doc firstly, and build a typescript react app.


That's all, thank you for your time!


ps. 
1. nodeversion: 14.15.4
2. npm start
3. HerokuLink: https://zhenbtc-app.herokuapp.com/
4. GithubLink: https://github.com/13146939zhenyang/zhenbtc-app.git