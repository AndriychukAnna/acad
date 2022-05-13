const about = document.getElementById("about");
const membership = document.getElementById("membership");
const meetings = document.getElementById("meetings");
const resources = document.getElementById("resources");

const modal = document.getElementsByClassName("list-modal-menu");

const aboutInner = document.getElementsByClassName("list-item-modal-about");
const membershipInner = document.getElementsByClassName(
  "list-item-modal-membership"
);
const meetingInner = document.getElementsByClassName("list-item-modal-meeting");
const resourcesInner = document.getElementsByClassName(
  "list-item-modal-resources"
);

const burger = document.getElementById("burger");
const cross = document.getElementById("cross");

const search = document.getElementsByClassName("list-item-link-hov-search");

const all1 = [
  document.querySelector(".hero-about-hidden"),
  // document.querySelector(".hero-membership-hidden"),
  document.querySelector(".hero-meetings-hidden"),
  document.querySelector(".hero-resources-hidden"),
];

const all2 = [
  // document.querySelector(".hero-about-hidden"),
  document.querySelector(".hero-membership-hidden"),
  document.querySelector(".hero-meetings-hidden"),
  document.querySelector(".hero-resources-hidden"),
];

const all3 = [
  document.querySelector(".hero-about-hidden"),
  document.querySelector(".hero-membership-hidden"),
  // document.querySelector(".hero-meetings-hidden"),
  document.querySelector(".hero-resources-hidden"),
];

const all4 = [
  document.querySelector(".hero-about-hidden"),
  document.querySelector(".hero-membership-hidden"),
  document.querySelector(".hero-meetings-hidden"),
  // document.querySelector(".hero-resources-hidden"),
];

function onClickAbout() {
  all2.map((el) => {
    if (el.matches(".is-visible")) {
      const dropdowns = document.getElementsByClassName("is-visible");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("is-visible")) {
          openDropdown.classList.remove("is-visible");
        }
      }
    }
  });
  document.querySelector(".hero-about-hidden").classList.toggle("is-visible");
}

function onClickMembership() {
  all1.map((el) => {
    if (el.matches(".is-visible")) {
      const dropdowns = document.getElementsByClassName("is-visible");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("is-visible")) {
          openDropdown.classList.remove("is-visible");
        }
      }
    }
  });

  document
    .querySelector(".hero-membership-hidden")
    .classList.toggle("is-visible");
}

function onClickMeetings() {
  all3.map((el) => {
    if (el.matches(".is-visible")) {
      const dropdowns = document.getElementsByClassName("is-visible");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("is-visible")) {
          openDropdown.classList.remove("is-visible");
        }
      }
    }
  });
  document
    .querySelector(".hero-meetings-hidden")
    .classList.toggle("is-visible");
}

function onClickResources() {
  all4.map((el) => {
    if (el.matches(".is-visible")) {
      const dropdowns = document.getElementsByClassName("is-visible");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("is-visible")) {
          openDropdown.classList.remove("is-visible");
        }
      }
    }
  });
  document
    .querySelector(".hero-resources-hidden")
    .classList.toggle("is-visible");
}

function onClickCancel(e) {
  if (
    !e.target.matches(".list-item-link-hov-hero") ||
    e.target.matches(".list-item-link-hov-hero-home")
  ) {
    const dropdowns = document.getElementsByClassName("is-visible");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("is-visible")) {
        openDropdown.classList.remove("is-visible");
      }
    }
  }
}

function onClickModal(e) {
  document.querySelector(".label").classList.add("search");

  document.querySelector(".list-modal").classList.toggle("is-visible");
  cross.classList.toggle("is-visible");
  burger.classList.toggle("display-none");
  burger.classList.toggle("is-visible");

  if (document.querySelector(".list-modal").classList.contains("is-visible")) {
    document.querySelector(".list-modal-menu").style.marginLeft = "370px";
  } else {
    document.querySelector(".list-modal-menu").style.marginLeft = "0";
  }
}

function onClickAboutInner() {
  document
    .querySelector(".list-modal-inner-about")
    .classList.toggle("is-visible");

  document.querySelector(".list-modal-inner-about").classList.toggle("active");
}

function onClickMembershipInner() {
  document
    .querySelector(".list-modal-inner-membership")
    .classList.toggle("is-visible");
}

document.querySelector(".list-modal-inner-about").classList.toggle("active");

function onClickMeetingInner() {
  document
    .querySelector(".list-modal-inner-meeting")
    .classList.toggle("is-visible");

  document.querySelector(".list-modal-inner-about").classList.toggle("active");
}

function onClickResourcesInner() {
  document
    .querySelector(".list-modal-inner-resources")
    .classList.toggle("is-visible");

  document.querySelector(".list-modal-inner-about").classList.toggle("active");
}

function onClickSearch() {
  document.querySelector(".list-modal").classList.remove("is-visible");
  cross.classList.remove("is-visible");
  burger.classList.remove("display-none");
  burger.classList.add("is-visible");

  if (document.querySelector(".list-modal").classList.contains("is-visible")) {
    document.querySelector(".list-modal-menu").style.marginLeft = "370px";
  } else {
    document.querySelector(".list-modal-menu").style.marginLeft = "0";
  }

  document.querySelector(".label").classList.toggle("search");
  document.querySelector(".label").focus();
}

about.addEventListener("click", onClickAbout);
membership.addEventListener("click", onClickMembership);
meetings.addEventListener("click", onClickMeetings);
resources.addEventListener("click", onClickResources);
modal[0].addEventListener("click", onClickModal);

document
  .querySelector(".hero-container")
  .addEventListener("click", onClickCancel);

aboutInner[0].addEventListener("click", onClickAboutInner);
membershipInner[0].addEventListener("click", onClickMembershipInner);
meetingInner[0].addEventListener("click", onClickMeetingInner);
resourcesInner[0].addEventListener("click", onClickResourcesInner);
search[0].addEventListener("click", onClickSearch);
