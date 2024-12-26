fetch('data.json')
    .then(response => response.json())
    .then(videos => {
        const container = document.getElementById('video-container');
        videos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.classList.add('video-card');
            videoElement.innerHTML = `        
                        <iframe
                            src="${video.url}"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen"
                        ></iframe>
                        ${video.title}
                    `;
            container.appendChild(videoElement);
            console.log(video.title);
        });
    })
    .catch(error => console.error('Error loading videos:', error));
