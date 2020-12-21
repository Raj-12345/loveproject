// state function.

async function getStates() {
    console.log("get states clled")
    let url = 'https://nitimanthan.in/ylcube/states/';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderStates() {
    console.log("render states clled")
    let state = await getStates();
    let html = ' <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">';
    console.log(state);
    state.forEach(stateData => {
    
        let htmlSegment =`<option>${stateData[1]}</option>`
        html += htmlSegment;
    });
  html=html+'</select>';
    let container1 = document.querySelector('.insertstate');
    let container2 = document.querySelector('.insertstateformodel');
    let container3 = document.querySelector('.insertstateformodelsearch');
    container1.innerHTML = html;
    container2.innerHTML = html;
    container3.innerHTML = html;
    console.log("this is calling"+html);
}
// renderStates();

// Leaders function.
async function getLeaders() {
    let url = 'https://nitimanthan.in/ylcube/leaders/';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderLeaders() {
    let leader = await getLeaders();
    let html = '<select class="custom-select mr-sm-2" id="inlineFormCustomSelect">';
    leader.forEach(leaderData => {
        let htmlSegment = `<option>${leaderData[1]}</option>`;

        html += htmlSegment;
    });
    html=html+'</select>';
    let container1 = document.querySelector('.leaders');
    let container2 = document.querySelector('.leadersformodel');
    container1.innerHTML = html;
    container2.innerHTML = html;
}


// Posts function.
    const postsFunc = function(posts){
    
        const postReturn = 
            `<li class="blogBox moreBox"> 
                <div class="posts">
                  <div class="card mb-3">
                      <div class="row no-gutters">
                          <div class="col-md-3">
                          <a href=${posts.header_picture_url}> <img src=${posts.header_picture_url} class="card-img" alt="Posts' Pictures"/></a>
                          </div>
                          <div class="col-md-8 desc-section">
                              <div class="card-body">
                              <h4 class="card-title">Title: ${posts.title}</h4>
                              </div>
                              <div class="title">
                              <p class="card-title">Leader: ${posts.leader__leader_name}</p>
                              <p class="region"><b>Region</b>: ${posts.region} &nbsp;&nbsp;&nbsp;&nbsp;
                               <b>Organizing Date</b>: ${posts.organized_on}</p>
                              <h5 class="card-text description">Description: </h5>
                              <p class="region"> ${posts.short_description.substring(0,300)}...</p>
                              </div>
                              <div class="button">
                                  <a href=${posts.post_page}><button type="button" class="btn btn-lg btn-dark" data-dismiss="modal">Read-More</button></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </li>`
              
              return postReturn;
    }
    
      fetch("https://nitimanthan.in/ylcube/posts/")
      .then(response => {
          if(!response.ok) {
              throw Error("ERROR");
          }
          return response.json();
      })
      .then(data => {
          const html = data.data
          .map(posts => postsFunc(posts))
          .join("");
          document.querySelector("#postsDiv").insertAdjacentHTML("afterbegin",html);
      })
      .catch(error => {
          console.log(error);
      });






  