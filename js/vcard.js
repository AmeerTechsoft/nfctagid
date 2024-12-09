// Contact information configuration
const contactInfo = {
    firstName: "Ameer",
    lastName: "Adeigbe",
    otherName: "A",
    email: "ameeradeigbe@gmail.com",
    phone: "+234 813 471 4184",
    address: "",
    company: "Ameer Techsoft",
    position: "CEO, Senior Dev",
    websiteUrl: "https://ameeradeigbe.netlify.com",
    photoUrl: "IMG2.jpeg",
    socialProfiles: {
        linkedin: "https://www.linkedin.com/in/ameeradeigbe",
        twitter: "https://twitter.com/ameeradeigbe",
        whatsapp: "https://wa.me/message/6GL43KUI2HERB1",
        instagram: "https://www.instagram.com/ameer_tsoft",
        github: "https://github.com/AmeerTechsoft/"
    }
};

// Generate vCard data
function generateVCardData(info) {
    return `BEGIN:VCARD
VERSION:3.0
ORG:${info.company}
N:${info.lastName};${info.firstName};${info.otherName}
TITLE:${info.position}
EMAIL:${info.email}
TEL:${info.phone}
ADR:${info.address}
PHOTO;VALUE=URL:${info.photoUrl}
URL:${info.websiteUrl}
X-SOCIALPROFILE;type=whatsapp:${info.socialProfiles.whatsapp}
X-SOCIALPROFILE;type=twitter:${info.socialProfiles.twitter}
X-SOCIALPROFILE;type=instagram:${info.socialProfiles.instagram}
X-SOCIALPROFILE;type=github:${info.socialProfiles.github}
END:VCARD`;
}

// Handle vCard download
function downloadVCard() {
    try {
        const vCardData = generateVCardData(contactInfo);
        const blob = new Blob([vCardData], { type: "text/vcard" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${contactInfo.firstName}_${contactInfo.lastName}.vcf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error('Error generating vCard:', error);
        alert('Sorry, there was an error saving the contact information. Please try again.');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById("downloadContact");
    if (downloadButton) {
        downloadButton.addEventListener("click", downloadVCard);
    }

    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random initial position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
});

