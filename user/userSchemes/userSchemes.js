let schemes = document.getElementById("details")

let generateSchemes = () => {
    return (
          
      schemes.innerHTML = allSchemes.map((x) => {
        let { no,link, name, desc} = x;
      
        return `
        
      <div  class="details">
          
        <div class="item">
        
        
        <div class="no">${no}</div>
        <div class="name"><a href = " ${link}">${name}</a></div>
         <div class="desc"><p>${desc}</p></div>
           <button>Apply Now</button>
            
        
        </div>
    </div>
      `;
      })
      .join(""));
  };

  generateSchemes();









