/* Q1 */
const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
   .split(' ')
   .map(word => word.length > 6 ? `<span style = "background-color:teal">${word}</span>` : word)
   .join(' ');

   /* Q2 */
   const link = document.createElement('a');
   link.href ="https://forcemipsum.com";
   link.innerText = "forcemipsum";
   document.body.appendChild(link);

   /* Q3 
   paragraph.innerHTML = paragraph.innerText
  .split('.')
  
  .join('</p><p>');
  */
   /* Q4 
   
   const paragraph=document.getElementById("remplacement")
   .replace(/\?/g,'🤔');
    .replace(/\!/g,'😲');

    */