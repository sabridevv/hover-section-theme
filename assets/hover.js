function toggleContent(event) {
    const block = event.target.closest('.expandable-block');
    const content = block.querySelector('.hidden-content');
    const button = document.querySelector('.toggle-button');

    // Toggle the display of the hidden content
    if (content.style.display === 'block') {
      content.style.display = 'none';
      button.style.backgroundColor = '#c4625f';
      button.innerHTML = `<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" width="30" height="30" rx="15" fill="#C4625F"/>
      <path d="M7.02173 15.6522V14.3478H14.8478V6.52173H16.1522V14.3478H23.9783V15.6522H16.1522V23.4783H14.8478V15.6522H7.02173Z" fill="white"/>
    </svg>`; // Change icon back to plus
    } else {
      content.style.display = 'block';
      button.style.backgroundColor = '#eae3d7';
      button.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.615234" width="23.3848" height="23.3848" rx="11.6924" fill="#EAE3D7"/>
      <path d="M7.44975 17.2574L6.74264 16.5503L10.9853 12.3076L6.74264 8.06498L7.44975 7.35787L11.6924 11.6005L15.935 7.35787L16.6421 8.06498L12.3995 12.3076L16.6421 16.5503L15.935 17.2574L11.6924 13.0147L7.44975 17.2574Z" fill="#C4625F"/>
    </svg>`; //change the logo to close
    }
  }