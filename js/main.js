(() => {
	const mobileWidth = 820;

	const addMenuBackground = () => {
		const pageWidth = window.innerWidth;
		const boddyOffset = document.body.scrollTop || document.documentElement.scrollTop;
		const navigation = document.querySelector("header nav");

        if(pageWidth > mobileWidth) {
            boddyOffset > 0 ? navigation.classList.add("aw-nav-fixed") : navigation.classList.remove("aw-nav-fixed");
        }
	}

	const reorderResponsiveMenu = () => {
        const pageWidth = window.innerWidth;
        const navContainer = document.querySelector("header nav .aw-container");
        const navigation = document.querySelector("header nav .aw-navigation");
        const mobileNavigation = document.querySelector("body > .aw-navigation");

        if (pageWidth <= mobileWidth && navigation) {
        	document.body.insertAdjacentElement("afterbegin", navigation);
        } else if (pageWidth > mobileWidth && mobileNavigation) {
        	navContainer.insertAdjacentElement("beforeend", mobileNavigation);
        }

	}

	const mobileMenuToggle = () => {
        const menuToggle = document.querySelector(".aw-nav-toggle");

        menuToggle.addEventListener("click", () =>{
        	const mobileNavigation = document.querySelector("body > .aw-navigation");

        	mobileNavigation.classList.toggle("aw-navigation-opened");
        })
	}

	window.addEventListener("scroll", () => {
		addMenuBackground();
	})

	window.addEventListener("resize", () => {
		reorderResponsiveMenu();
	})
    
    reorderResponsiveMenu();
    mobileMenuToggle();
	
})();