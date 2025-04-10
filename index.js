function uploadVideo() {
    const videoInput = document.getElementById('videoUpload');
    const videoContainer = document.getElementById('videoContainer');

    if (videoInput.files && videoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            video.style.maxWidth = '300px';
            videoContainer.appendChild(video);
        };
        reader.readAsDataURL(videoInput.files[0]);
    } else {
        alert("No video selected.");
    }
}
