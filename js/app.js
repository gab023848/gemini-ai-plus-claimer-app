/**
 * Gab's Google AI Plus Portal — Interactive Landing Page Script
 * Web-based edition — no application download required.
 * Handles mobile navigation and clipboard copy functionality.
 */

// Mobile Drawer Navigation
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconBars = document.getElementById("menu-icon-bars");
const menuIconClose = document.getElementById("menu-icon-close");

if (mobileMenuBtn && mobileMenu) {
	mobileMenuBtn.setAttribute("aria-controls", "mobile-menu");

	mobileMenuBtn.addEventListener("click", () => {
		const isOpen = !mobileMenu.classList.contains("hidden");
		if (isOpen) {
			mobileMenu.classList.add("hidden");
			mobileMenuBtn.setAttribute("aria-expanded", "false");
			menuIconBars.classList.remove("hidden");
			menuIconClose.classList.add("hidden");
		} else {
			mobileMenu.classList.remove("hidden");
			mobileMenuBtn.setAttribute("aria-expanded", "true");
			menuIconBars.classList.add("hidden");
			menuIconClose.classList.remove("hidden");
		}
	});

	// Auto-close mobile drawer when tapping any navigation anchor
	document.querySelectorAll(".mobile-nav-link").forEach((link) => {
		link.addEventListener("click", () => {
			mobileMenu.classList.add("hidden");
			mobileMenuBtn.setAttribute("aria-expanded", "false");
			menuIconBars.classList.remove("hidden");
			menuIconClose.classList.add("hidden");
		});
	});

	// Auto-close on Escape key press
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
			mobileMenu.classList.add("hidden");
			mobileMenuBtn.setAttribute("aria-expanded", "false");
			menuIconBars.classList.remove("hidden");
			menuIconClose.classList.add("hidden");
			mobileMenuBtn.focus();
		}
	});
}

// Accessible Code Snippet Copy function with screen-reader announcement
function copySnippet(btn, text) {
	navigator.clipboard.writeText(text).then(() => {
		const orig = btn.textContent;
		btn.textContent = "Copied!";
		btn.classList.add("text-emerald-400");

		const announcer = document.getElementById("a11y-announcer");
		if (announcer) {
			announcer.textContent = "Copied to clipboard: " + text;
		}

		setTimeout(() => {
			btn.textContent = orig;
			btn.classList.remove("text-emerald-400");
			if (announcer) {
				announcer.textContent = "";
			}
		}, 2000);
	});
}
