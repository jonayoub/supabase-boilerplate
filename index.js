// Add JavaScript below
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://hdnelugfbjgnjgrwegpv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkbmVsdWdmYmpnbmpncndlZ3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4MTQ0NTIsImV4cCI6MTk5MzM5MDQ1Mn0.0ouFVtkxeCSWtuCmsNfqFYvjo7tXUnbnbEMZ-Qs6u6U'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
  let { data: books, error } = await supabase
  .from('books')
  .select('*')
  
  for (let book of books){
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr> <td>${book.title}</td> <td>${book.author}</td> <td>${book.ISBN}</td> </tr>`;
  }
  
}

getBooks();