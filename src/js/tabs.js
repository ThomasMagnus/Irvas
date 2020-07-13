const tabs = () => {
	const glazingBlock = document.querySelectorAll('.glazing_block'),
		  glazingContent = document.querySelectorAll('.glazing_content'),
		  balconIconsImg = document.querySelectorAll('.balcon_icons_img'),
		  linkTabs = document.querySelectorAll('.glazing_block a'),
		  tabsImg = document.querySelectorAll('#tabs-img');

	const hideContent = (tabContentSelector, tabBtnSelector, activeClass) => {
		tabContentSelector.forEach(item => {
			item.style.display = 'none';
		})

		tabBtnSelector.forEach(item => {
			item.classList.remove(activeClass)
		})
	}
	
	hideContent(glazingContent, linkTabs, 'active');

	const showContent = (n, tabContentSelector, tabBtnSelector, activeClass) => {
		tabContentSelector[n].style.display = 'block';
		tabBtnSelector[n].classList.add(activeClass)
	}

	showContent(0, glazingContent, linkTabs, 'active');

	glazingBlock.forEach(item => {
		item.addEventListener('click', () => {
			glazingContent.forEach((elem, i) => {
				if(item.dataset.glass == elem.dataset.glass) {
					hideContent(glazingContent, linkTabs, 'active');
					showContent(i, glazingContent, linkTabs, 'active');
				}
			})
		})
	})

	hideContent(tabsImg, balconIconsImg, 'do_image_more')
	showContent(0, tabsImg, balconIconsImg, 'do_image_more');

	balconIconsImg.forEach(item => {
		item.addEventListener('click', () => {
			tabsImg.forEach((elem, i) => {
				if(item.dataset.balcon == elem.dataset.balcon) {
					hideContent(tabsImg, balconIconsImg, 'do_image_more')
					showContent(i, tabsImg, balconIconsImg, 'do_image_more');
				}
			})
		})
	})

	const decorationItem = document.querySelectorAll('.decoration_item .no_click'),
		  decorationСontent = document.querySelectorAll('#decoration_content');

	hideContent(decorationСontent, decorationItem, 'after_click');
	showContent(0, decorationСontent, decorationItem, 'after_click'); 
	
	decorationItem.forEach(item => {
		item.addEventListener('click', () => {
			decorationСontent.forEach((elem, i) => {
				if(item.dataset.set == elem.dataset.set) {
					hideContent(decorationСontent, decorationItem, 'after_click');
					showContent(i, decorationСontent, decorationItem, 'after_click'); 	
				}
			})
		})
	})
}

export default tabs;