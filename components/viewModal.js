import { closeIcon } from "./closeIcon.js";
/**
 * Generates a view modal HTML string with the given title, content, and date.
 *
 * @param {string} title - The title of the entry.
 * @param {string} content - The content of the entry.
 * @param {string} date - The date of the entry.
 * @return {string} - The HTML string of the view modal.
 */
const createViewModal = (title, content, date) => {
  return `
    <!-- View Modal -->
    <div id="viewModal" class="modal-view">
        <!-- Content -->
        <div class="modal-content-view">
          <!-- Close Button -->
          <div class="modal-container">
            <span class="closeView" onclick="window.close()">
              <!-- Close Icon -->
                ${closeIcon}
            </span>
          </div>
          <!-- Entry Details -->
          <div class="modal-view-container">
            <p class="modal-text-date">
             ${date}
            </p>
            <h1 class="modal-text-title">
             ${title}
            </h1>
            <p class="modal-text-content">
              ${content}
            </p>
          </div>
          <!-- Close Button at Bottom -->
          <div class="modal-container">
            <span class="closeViewButtom">
              <!-- Close Icon -->
              ${closeIcon}
            </span>
          </div>
        </div>
    </div>
    `;
};

// This class defines a custom HTML element for the view modal.
class ViewModal extends HTMLElement {
  constructor() {
    super();
  }

  // When the element is added to the DOM, set its innerHTML to the view modal HTML
  connectedCallback() {
    this.innerHTML = createViewModal();
  }
}

// Define the custom element with the name 'view-modal'
window.customElements.define("view-modal", ViewModal);

// Export the createViewModal function for use in other modules
export { createViewModal };
