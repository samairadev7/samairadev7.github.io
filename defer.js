var_check='';
Logger=[];
tittle=['Home | Nanda Electronics','ABOUT US | Nanda Electronics','CONTACT US | Nanda Electronics','EMPLOYEE LOGIN | Nanda Electronics','USER DATA | Nanda Electronics']
favicon_url=`https://greatret.github.io/ben-10/images/favicon.ico`
check_page_name=false;
loc='';SETUP={
    BASE_URL:`https://samairadev7.github.io/`,js_code:['HTML_CODE.js','style_code.js','js_code.js'],contact_detail:["+91 9833886114","+91 9321618561",`nadaelectronics1993@gmail.com`],
    contact_us:'contact-us.html',employee:`https://sheet.best/api/sheets/3ffbd842-1145-4fa6-b1aa-b37a4d28b587`,
    user_data:"https://sheet.best/api/sheets/24201940-ad47-49e6-9b34-920e8be34d7d",send_url:`https://sheet.best/api/sheets/649b38de-6f3d-414a-9980-73149f25582c`,
    contact_us_form_ok:`Thank you for connecting`,contact_us_form_err:`some error occured !!!!!!!!!`,hash:''}
page_path=['contact-us.html','about-us.html','employee-login.html','user-data.html']
status_check={page:false,HTML_CODE:false,style_code:false,js_code:false,check:false,check_one:false,check_two:false,header_footer_js:false,
page_js:false,catogree:false,company:false,user_data:false ,to:false,bought:true,done:false,hash:false}

employee=[{"sr_no":"1","name":"empolye one","email":"employeOne@nandaelectronics.com","password":"ZW1wbG95ZU9uZTEyMzQ1"},{"sr_no":"2","name":"employee two","email":"employeTwo@nandaelectronics.com","password":"ZW1wbG95ZVR3bzEyMzQ1"},{"sr_no":"2","name":"nimish boda","email":"seven@nandaelectronics.com","password":"c2V2ZW43Nzc3"}]
class seven_api
{page;hash_data=[];
constructor(){   Logger.push(`init: CONSTRUCTOR` );this.page_finder_and_hash_replacer();this.JS_CODE_CALL();Logger.push(`success: CONSTRUCTOR`)}
spcecail_function(){this.createElement("script","","head",'.bdy2',true,{src:'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'})}

check_jquery(){this.createElement("script","","head",'.bdy2',true,{src:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",integrity:"sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==",
            crossorigin:"anonymous",})
            this.createElement("script","","head",'.bdy2',true,{src:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",
            integrity:"sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==",
            crossorigin:"anonymous",})}



        Template_creator()
        {
           
            Logger.push(`init: Template_creator `)
            Logger.  push(`data=>  removed bdy `)
            document.body.innerHTML='';
            this.createElement("link","","head","",true,{href:favicon_url,type:"image/x-icon",rel:"shortcut icon"})

            this.createElement("style",style_CODE.header,"head")
            this.createElement("header",HTML_CODE.header)

             Logger.push(`  =>header done`)

            if(this.page =='home.html' ||this.page =='index.html' ||this.page =='')
            {
                
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy'})
                this.createElement("div",HTML_CODE.home,"body",'.bdy',false,{class:'bdy'})
                this.createElement("style",style_CODE.home,"head")
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy2'})
                // this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy3'})
                Logger.push(`   =>index done`)
                // this.createElement("tittle",tittle[0],"head")
                document.title=tittle[0]
    
            }    
            else if(this.page ==page_path[0])
            {
                this.createElement("style",style_CODE.contact_us,"head")
                this.createElement("div",HTML_CODE.contact_us,"body",'bsd',true,{class:'contact-us-above'})
                this.createElement("p","","body",'bsd',true,{class:'form-confirmation-text'})
                

                this.createElement("div",HTML_CODE.contact_us_below,"body",'bsd',true,{class:'contact-us-below'})
                
              
                Logger.push(`   =>${page_path[0]} done`)
                document.title=tittle[2]
            }
            else if(this.page ==page_path[1])
            {
                
                this.spcecail_function()
                this.createElement("style",style_CODE.about_us,"head")
                
                               
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy'})//carasol
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy2'})
                // // <hr class="about-hr">
                this.createElement("hr",'',"body",'bsd',true,{class:'about-hr'})
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy3'})
                this.createElement("div",'LOADING',"body",'bsd',true,{class:'bdy4'})

                // // <div class="about-tag-line">
                this.createElement("div",HTML_CODE.about_us,"body",'.bdy2',false,{class:'about-tag-line'})
                
                
                
                // // // <hr class="about-hr">
                this.createElement("hr",'',"#bdy-spl",'bsd',true,{class:'about-hr'})
                this.createElement("div",'LOADING',"#bdy-spl",'bsd',true,{class:'bdy3'})
                this.createElement("div",'LOADING',"#bdy-spl",'bsd',true,{class:'bdy4'})

                // // // <div class="about-tag-line">
                
                   this.createElement("div",`
                BRANDS WE DEAL WITH
                `,"body",'.bdy3',false,{class:'brands-head'})
                
                Logger.push(`   =>${page_path[0]} done`)
                        
                document.title=tittle[1]
            }
            else if(this.page ==page_path[2])
            {
                document.cookie=`e=;`
                document.cookie=`p=;`
                document.cookie=`pal=;`
                this.createElement("style",style_CODE.employee_login,"head")

                this.createElement("div",HTML_CODE.employee_login,"body",'bsd',true,{class:'employeelogin-form-container'})
                document.title=tittle[3]

            }
            else if(this.page ==page_path[3])
            {
                this.createElement("style",style_CODE.user_data,"head")
                this.createElement("div",'Please Login ........................',"body",'bsd',true,{class:'table-container'})
                // this.createElement("table",HTML_CODE.user_data,".table-container",'bsd',true,{class:'content-table'})
                document.title=tittle[4]
            }

            if(this.page !=page_path[3])
            {    
            this.createElement("style",style_CODE.footter,"head")
            this.createElement("footer",HTML_CODE.footter)
            }    
            // js_CODE.header_footter()
            Logger.push(`   =>$footer done`)
            
            status_check.page=true;
            
            Logger.  push('success: Template creator')
        }
       
        
page_finder_and_hash_replacer()
{
    // let window={}; window.location={}; window.location.href=`https://nandaelectronics.com/`;
    let spl=`https://nandaelectronics.com`;Logger.push(`init: page_finder_and_hash_replacer `);
    if(window.location.href==spl){console.log('spl');this.page=`home.html`;status_check.to=true;return false;}
    let len=window.location.href.split('/').length;let page=window.location.href.split('/')[len-1];
            Logger.push(`data=>$page len ${page}`)
            
    if(page.indexOf('.')== -1)//"page"
                {
                status_check.to=true;
                // console.log('.!')
                Logger.push(`   => != .`)

                if(page.indexOf('#')== -1)//"page"
                    {
                        Logger.push(`   => != # `)
                        if(page == "")
                        {
                        page="home"    
                        }
                        page+='.html'
                    }
                    else//page#data
                    {
                        Logger.push(`   => == #`)


                        let page2=page.split('#');
                        if(page2[0] == "")
                        {
                            page=`home.html`
                        }
                        else
                        {   
                        page=`${page2[0]}.html`
                        }
                        Logger.push(`   => page = ${page}`)
                        
                        if(page==SETUP.contact_us)
                        {
                            
                             Logger.push('called: page_finder_and_hash_replacer=>hashdata_appender ')
                        this.hashdata_appender(page2[1])
                        Logger.push('out: page_finder_and_hash_replacer=>hashdata_appender ')
                        }
                        else{
                            window.location.href=`${ window.location.href.split('#')[0]}`
                        }

                    }
            
            }
            else//"page.html"
            {  
                
                if(page.indexOf('#')!= -1)//page.html#data
                {
                    Logger.push('   => != #')

                    
                let page2=page.split('#');
                page=page2[0]
                Logger.push(`   => page=${page}`)


                if(page==SETUP.contact_us)
                        {   
                            Logger.push('called: page_finder_and_hash_replacer=>hashdata_appender ')
                            // console.log('.html !=-1 hash')
                        this.hashdata_appender(page2[1])
                        Logger.push('out: page_finder_and_hash_replacer=>hashdata_appender ')
                        
                        }
                        else{
                            window.location.href=`${ window.location.href.split('#')[0]}`
                        }
                }
                
                
            }
            this.page=page
            Logger.push(`   =>this.page={this.page}`)

            Logger.push(`success: page_finder_and_hash_replacer page=${page}`)
        }
        

        hashdata_appender(has)//data=option
        {
            Logger.push(`init: hashdata_appender with ${has}`)
            Logger.push(`data=>/n `)
            
            if(has.indexOf('=') == -1)//data
            {
                Logger.push(`   => !=  =`)
        
                Logger.push(`called:hashdata_appender => hash__data`)
                this.hash_data.push(has)
   
                Logger.push(`out:hashdata_appender => hash__data`)
   
            }
            else     //data=option
            {
                Logger.push(`   => ==  =`)

                let av=has.split('=')

                Logger.push(`   =>for each  `)
                av.forEach(element=>{

                Logger.push(`       - ${element} `)    
           
                    this.hash_data.push(element)    
   
                })
            

            }
            status_check.hash=true;
            Logger.push(`success: hashdata_appender hash data= ${this.hash_data.length}`)
        }
 

        JS_CODE_CALL()
        {   
            Logger.push(`init: JS_CODE_CALL`)
            Logger.push(`data=>for each  `)
            
            SETUP.js_code.forEach(ev=>{
                Logger.push(`   -${ev}  `)
            
                this.sevenfetch(ev);
            })
            
            Logger.push(`success: JS_code_call`)

        }
        init_()
        {
            fetch(SETUP.employee)
            .then(response => response.json())
            .then(data => {
              
            //   console.log("data",data.length);
    
            after_employee_fetch(data);
            })
            .catch(error => {
              console.error(error);
            });
           
            waste()//just waste does nothing  msg for dev

        }

        sevenfetch(path)
        {

            Logger.push(`init: sevenfetch ${path}` )
            Logger.push(`data=>\n `)

        fetch(`${SETUP.BASE_URL}${path}`)
        .then(
            ev=>{
                if(ev.ok)
                {
                    Logger.push(`   => ok`)


                    // console.log("done",ev)
                      Logger.  push(`success: sevenfetch ${path}`)

                      Logger.push(`    => return text `)

                      return ev.text()
                    
                }
                else
                {   
            

                    console.log("error")
                      Logger.  push(`err: sevenfetch  cant-load =${path}`)

                }
                }
        )
        .catch(ev=>{
            
            Logger.push(`err: sevenfetch  cant-convert =${path}`)

        })
        .then(
            ev=>{
            // Logger.push(`   =>${ev[10]}`)
            Logger.push(`calling:   sevenfetch => createElement`)
                    
            this.createElement("script",ev,"head")

            Logger.push(`out:   sevenfetch => createElement`)
                
        })
        Logger.push(`success :   sevenfetch `)
        }
        
        createElement(Type="p",HTML="seven",on="body",With='bsd',append=true,onload={})
        {   
            Logger.push(`init: createElement  ${Type},${HTML.substring(0,10)},${onload},${on},${With},${append}` )
            
            let ele=document.createElement(Type);
            Logger.push(`data=> created ${ele}`)

            ele.innerHTML=HTML;
            Logger.push(`   => added inner`)



            Logger.push(`   => forEach`)
            Object.keys(onload).forEach(ev=>{
             
                Logger.push(`       -${ev}`)
                ele.setAttribute(`${ev}`,`${onload[ev]}`)
            
            })


            if (append)
            {
                Logger.push(`calling:   createElement => appendElement`)
                this.appendElement(on,ele)//!!!!!!!!!!!!!!!!
                Logger.push(`out:   createElement => appendElement`)
            
            }
            else
            {
                Logger.push(`calling:   createElement => replaceElement`)
                this.replaceElement(on,ele,With)
                Logger.push(`out:   createElement => replaceElement`)
            }
            
        }   

        is_man()
        {
            
            // console.log("is man")

            
           const data12={
               e:()=>{
                   return email.value;
               },
               p:()=>{return password.value;}
                }
            let e=data12.e()
            let p=data12.p()
            console.log(e,p)
            let a=p.split('@').length;
            if( a ==1)
            {
                console.log('wrong-password')
            }
            else
            {
                // this.fetch_json_xml(`${SETUP.employee}`,after_employee_fetch)
                let adds=document.querySelector("#result")
               
                a=p.split('@')
                if(a[0] == "" && a[1]=="")
                {
                    console.log('wrong-password2')
                    adds.innerHTML="!!!Wrong id or password Reload and Re-enter"
                    adds.style.color="red";
                }
                
                else if(a[0] == "" )
                {
                    console.log('wrong-password3')
                    adds.innerHTML="!!!Wrong id or password Reload and Re-enter"
                    adds.style.color="red";
                }
                
                else if(a[1] == "" )
                {
                    console.log('wrong-password4')
                    adds.innerHTML="!!!Wrong id or password Reload and Re-enter"
                    adds.style.color="red";
                }
                
                else                
                {

                    p=window.btoa(`${a[0]}${a[1]}`)
                    document.cookie=`e=${e};`
                    document.cookie=`p=${p};`
                    this.init_()
                    document.cookie=`pal=${a[1]};`

                    document.cookie=`tried=${new Date()}`;
                    console.log('check-cookie')
                    status_check.done=true;
                   
                }
                
            }

        }


        appendElement(on,ele)
        {
            
            Logger.push(`init: appendElement   ${on} -> ${ele}` )
            // console.log(`init: appendElement   ${on} `,ele )
            
            Logger.push(`data=>\n`)

            let element=document.querySelector(on)
            if(element!=null)
            {
                Logger.push(`   => ${on} != null`)
                
                element.appendChild(ele)
                
                Logger.push(`success: appendElement ${on} ->${ele}`)
                
            }
            else
            {
                Logger.push(`   => ${on} == null`)
                
                Logger.push(`err: appendchild  ERROR =  ${on} ->${ele}   1==is null`)
            }


        }
       
        replaceElement(on,ele,With) 
        {
            
            Logger.push(`init: replaceElement  ${on},${ele},${With}` )
            
            let element=document.querySelector(on)
            let element2=document.querySelector(With)
            
            
            // console.log(element,element2)
            
            if(element==null &&  element2==null)
            {
                Logger.push(`err:replacechild  ERROR =element ${on} is null`)
                Logger.push(`err:replacechild  ERROR =element2 ${With} is null`)
            }
            else if(element==null)

            {
                Logger.push(`err:replacechild  ERROR =element ${on} is null`)
            }
            else if(element2==null)

            {
                Logger.push(`err:replacechild  ERROR =element2 ${With} is null`)
            }
            else if(element!=null &&  element2!=null)
            {
                element.replaceChild(ele,element2)

                Logger.push(`success :  replacechild ${on} -> ${With}`)
            }
        }
        
        fetch_json_xml(fet,funct)
        {
        let nb=false;
        
        
        console.log(fet)
        // let categorycard_list_data=[];

        fetch(fet)
        .then(response => response.json())
        .then(data => {
          
          console.log("data",data);

          // categorycard_list_data=data;
         
          funct(data);
        })
        .catch(error => {
          console.error(error);
        });

                        
        console.log(nb);
        if(nb==false)
        {
            console.log('nimish')
            if(status_check.catogree==true)
            {
                console.log('nimish')
            }
            else
            if(status_check.company==true)
            {
                console.log('nimish')
            }
            
            else if(status_check.user_data==true)
            {
                alert('call ur developers')
            }
            
        }


        }
        

}



Logger.push(`init:check` )
ce=false
async function check()
{
    setTimeout(ev=>{
        if(status_check.HTML_CODE==true && status_check.js_code==true && status_check.js_code==true)
        {
            
            if (ce)
            {
                
                if(document.querySelector("footer") == null && seven.page ==page_path[3] && document.querySelector(".table-container") == null)
                {
                        
                    check()
                }
                else if(document.querySelector("footer") == null && seven.page ==page_path[3] && document.querySelector(".table-container") != null)
                {
                    if(status_check.page==true)
                    {
     
                        check_tag_ava()                 
                       
                    }

                    
                }

                else if(document.querySelector("footer") == null)
                {
 
                    check()

                }
                
                
                else{
                   
                    if(status_check.page==true)
                    {
     
                        check_tag_ava()                 
                       
                    }
                }

            }
            else
            {
            status_check.check=true;
            Logger.push(`success:check` )
         
            seven.Template_creator()
            js_CODE.header_footter()
            
            ce=true;
            check()
                     
            }

        }
        else
        {
            check()
        }
    },100)
}


spl_logger=[];
async function waste()
{//wate function does nothing using to try async function dev overlook it


console.log('waste')
 await  setTimeout(ev=>{
       if( status_check.done!=true)
       {
        //    waste();
        }       
       else
       { let cnt=0;
        status_check.done=false;
        const data12={e:''}
        cookies=document.cookie;
        cookies=cookies.split(';')
           
        cookies.forEach(ev=>{
            
                        spl=ev.indexOf('=')
                        spl=[ev.substring(0,spl),ev.substring(spl+1,ev.length)]    
                        // console.log(spl[0])
                        data12[spl[0]]=spl[1]
                    })
                console.log(data12)
           
                // //EmailaddressPassword
        employee.forEach(ev=>{
                //console.log(ev.email,data12[" e"],data12.e,ev.password,data12[" p"],ev.email==data12[" e"] ||ev.email==data12.e,ev.password == data12[" p"])
                window.spl_logger.push(`${ev.email},${data12.e},${ev.password},${data12[" p"]}`)
                if((ev.email==data12[" e"] ||ev.email==data12.e) && ev.password ==data12[" p"])
                {    window.spl_logger.push('true')   
//                     console.log('nimish boda')          
                 cnt=1;
                    document.cookie="auth=true;"
                    if(seven.page==page_path[2])
                    {
                        if(status_check.to == false)
                        {
                            window.location.href=`/${page_path[3]}`
                        }
                        else
                        {
                            window.location.href=`/${page_path[3].split(".")[0]}`
                        }
                        
                    }
                
                }
                
                
                
                
                
            })
            let adds=document.querySelector("#result")
                if(cnt == 0)
                {    
                adds.innerHTML="!!!Wrong id or password Reload and Renter"
                adds.style.color="red";
                }
                else
                {
                    adds.innerHTML="!!!welcome sir!!!"
                adds.style.color="green";
                }

        }        
       
    },5)
   
}
// waste();
function check_tag_ava()
{   
    Logger.push(`init: check_tag_ava() `)
    let a=document.querySelector(".nav-links")
    let b=document.createElement('li')
    let c=document.querySelectorAll(".nav-link")
    b.setAttribute("id","active-link")
    b.setAttribute("class","nav-link")
    // console.log(a,b,c)
    if(seven.page == page_path[0])//contac-us
    {
        js_CODE.contact_us()  
        b.innerHTML=`<a href="contact-us">CONTACT US</a>`
        a.replaceChild(b,c[2])        
    }
    else
    if(seven.page == page_path[1] && window.jQuery != null)//contac-us
    {

        seven.check_jquery()
            
        setTimeout(ev=>{js_CODE.about_us()},10)
        
        b.innerHTML=`<a href="about-us">ABOUT US</a>`
        a.replaceChild(b,c[1])
    }
    else if(seven.page == page_path[2])
    {
        setTimeout(ev=>{js_CODE.employee_login()},10)

        b.innerHTML=`<a href="employee-login">EMPLOYEE LOGIN</a>`
        a.replaceChild(b,c[3])
    
        
            
        let data12={}
        cookies=document.cookie;
        cookies=cookies.split(';')
       
        cookies.forEach(ev=>{
       
                spl=ev.indexOf('=')
                spl=[ev.substring(0,spl),ev.substring(spl+1,ev.length)]    
                // console.log(spl[0])
                data12[spl[0]]=spl[1]
            })
        // console.log(data12,data12["auth"])


        // console.log()
        if(data12[" auth"] == "true")
        {
       
            if(status_check.to == false)
            {
                window.location.href=`/${page_path[3]}`
            }
            else
            {
                window.location.href=`/${page_path[3].split(".")[0]}`
            }


        }
    
    }
    else if(seven.page == page_path[3])
    {
        
       
        let data12={}
            
        
        
            
            
            cookies=document.cookie;
            cookies=cookies.split(';')
           
            cookies.forEach(ev=>{
           
                    spl=ev.indexOf('=')
                    spl=[ev.substring(0,spl),ev.substring(spl+1,ev.length)]    
                    // console.log(spl[0])
                    data12[spl[0]]=spl[1]
                })
            // console.log(data12,data12["auth"])


            // console.log()
            if(data12[" auth"] == "true")
            {
                let a=document.querySelector(".table-container")
                a.innerHTML="";
                setTimeout(ev=>{js_CODE.user_data()},10)
                seven.createElement("table",HTML_CODE.user_data,".table-container",'bsd',true,{class:'content-table'}) 
                                
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } 
                function showPosition(position) {
                window.loc= `Latitude:${ position.coords.latitude  }  Longitude: ${position.coords.longitude}`}
                window.sd= [
                    {
                      sr_no: 1,
                      name: data12.e|| data12[" e"] ||"cant find",
                      time: new Date(),
                      loc: window.loc
                    },
                  ];
                  //https://sheet.best/api/sheets/beb4690a-0680-4d08-8979-9afcfd897de7

                  fetch(SETUP.send_url, {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(sd),
                        })
                        .then(r => r.json())
                        .then(data => {
                            // The response comes here
                            // console.log(sd);
                        })
                        .catch(error => {
                            // Errors are reported there
                            console.log(error);
                        });



            }
            else
            {
                if(status_check.to == false)
                {
                    window.location.href=`/${page_path[2]}`
                }
                else
                {
                    window.location.href=`/${page_path[2].split(".")[0]}`
                }
            }
      
    }
    
    else if (seven.page =='home.html' ||seven.page =='index.html' ||seven.page =='')
    {
        
        setTimeout(ev=>{js_CODE.home()},10)

        b.innerHTML=`<a href="home">HOME</a>`
        a.replaceChild(b,c[0])
    }

status_check.page_js=true
Logger.push(`init: check_tag_ava() `)
}
check()

window.seven=new seven_api() 
function after_employee_fetch(data)
{
    
    status_check.bought=true;
    window.employee=[...employee,...data];
    console.log("addaeeaddadead")
}
