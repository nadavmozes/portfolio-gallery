function initPage() {
    renderProjects()
}

function renderProjects() {
    var projects = getProjectsForDisplay()
    console.log('projects', getProjectsForDisplay)
    var strHtmls = projects.map(function(proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <span class="badge badge-primary">HTML</span>
        <span class="badge badge-secondary">CSS</span>
        <span class="badge badge-success">Java-Script</span>
        <a class="portfolio-link" data-toggle="modal" href="#${proj.id}" onclick="showModal('${proj.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.imgUrl}" alt="${proj.name}">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4 >
            <p class="text-muted">${proj.desc}</p>
        </div >
      </div >`
    })
    document.querySelector('#portfolio .container .row').innerHTML = strHtmls.join('')
}


function showModal(projId) {
    var $elModal = $('.modal');
    $elModal.attr('id', projId)
    var project = getProjectById(projId)
    $elModal.find('h2').text(project.name)
    $elModal.find('.item-intro').text(project.desc)
    $elModal.find('.image-proj').src(project.imgUrl)
    $elModal.find('.modal-disc').text(project.name)
}

// Put send contact form button after text-area
$("#message").after($("#contact > section > div > div > div.text-center.text-md-left > a"));