/**
 * Flag Dropdown JavaScript
 * Interactive dropdown functionality for language selectors
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    openClass: 'open',
    dropdownSelector: '.fi-dropdown',
    toggleSelector: '.fi-dropdown-toggle',
    menuSelector: '.fi-dropdown-menu',
    searchSelector: '.fi-dropdown-search input',
    itemSelector: '.fi-dropdown-menu a, .fi-dropdown-menu button'
  };

  /**
   * FlagDropdown Class
   */
  class FlagDropdown {
    constructor(element, options = {}) {
      this.element = element;
      this.options = {
        onSelect: options.onSelect || null,
        onOpen: options.onOpen || null,
        onClose: options.onClose || null,
        closeOnSelect: options.closeOnSelect !== false,
        keyboard: options.keyboard !== false
      };
      
      this.toggle = element.querySelector(CONFIG.toggleSelector);
      this.menu = element.querySelector(CONFIG.menuSelector);
      this.searchInput = element.querySelector(CONFIG.searchSelector);
      this.items = element.querySelectorAll(CONFIG.itemSelector);
      this.isOpen = false;
      this.focusedIndex = -1;
      
      this.init();
    }

    init() {
      // Toggle click
      if (this.toggle) {
        this.toggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.isOpen ? this.close() : this.open();
        });
      }

      // Item clicks
      this.items.forEach(item => {
        item.addEventListener('click', (e) => {
          this.selectItem(item, e);
        });
      });

      // Search functionality
      if (this.searchInput) {
        this.searchInput.addEventListener('input', (e) => {
          this.filterItems(e.target.value);
        });
        
        // Prevent dropdown close when clicking search
        this.searchInput.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }

      // Keyboard navigation
      if (this.options.keyboard) {
        this.element.addEventListener('keydown', (e) => this.handleKeyboard(e));
      }

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!this.element.contains(e.target)) {
          this.close();
        }
      });

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.close();
        }
      });
    }

    open() {
      if (this.isOpen) return;
      
      // Close other dropdowns
      document.querySelectorAll(CONFIG.dropdownSelector + '.' + CONFIG.openClass).forEach(dd => {
        if (dd !== this.element) {
          dd.classList.remove(CONFIG.openClass);
        }
      });

      this.element.classList.add(CONFIG.openClass);
      this.isOpen = true;
      this.focusedIndex = -1;

      // Focus search if available
      if (this.searchInput) {
        setTimeout(() => this.searchInput.focus(), 100);
      }

      if (this.options.onOpen) {
        this.options.onOpen(this);
      }
    }

    close() {
      if (!this.isOpen) return;
      
      this.element.classList.remove(CONFIG.openClass);
      this.isOpen = false;
      this.focusedIndex = -1;

      // Clear search
      if (this.searchInput) {
        this.searchInput.value = '';
        this.filterItems('');
      }

      if (this.options.onClose) {
        this.options.onClose(this);
      }
    }

    toggle() {
      this.isOpen ? this.close() : this.open();
    }

    selectItem(item, event) {
      // Get data
      const value = item.dataset.value || item.textContent.trim();
      const flag = item.querySelector('.fi');
      const flagClass = flag ? flag.className : '';
      const text = item.textContent.trim();

      // Update toggle
      if (this.toggle) {
        const toggleFlag = this.toggle.querySelector('.fi');
        const toggleText = this.toggle.querySelector('span:not(.fi)');

        if (toggleFlag && flag) {
          toggleFlag.className = flag.className;
        }
        if (toggleText) {
          toggleText.textContent = text.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, '').trim();
        }
      }

      // Mark as active
      this.items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Callback
      if (this.options.onSelect) {
        this.options.onSelect({
          value,
          text,
          flagClass,
          element: item
        });
      }

      // Close if configured
      if (this.options.closeOnSelect) {
        this.close();
      }
    }

    filterItems(query) {
      const normalizedQuery = query.toLowerCase().trim();

      this.items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const value = (item.dataset.value || '').toLowerCase();
        const matches = text.includes(normalizedQuery) || value.includes(normalizedQuery);

        item.style.display = matches ? '' : 'none';
      });

      // Reset focus
      this.focusedIndex = -1;
    }

    handleKeyboard(e) {
      if (!this.isOpen) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
          e.preventDefault();
          this.open();
        }
        return;
      }

      const visibleItems = Array.from(this.items).filter(item => 
        item.style.display !== 'none'
      );

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          this.focusedIndex = Math.min(this.focusedIndex + 1, visibleItems.length - 1);
          visibleItems[this.focusedIndex]?.focus();
          break;

        case 'ArrowUp':
          e.preventDefault();
          this.focusedIndex = Math.max(this.focusedIndex - 1, 0);
          visibleItems[this.focusedIndex]?.focus();
          break;

        case 'Enter':
          if (this.focusedIndex >= 0 && visibleItems[this.focusedIndex]) {
            e.preventDefault();
            this.selectItem(visibleItems[this.focusedIndex], e);
          }
          break;

        case 'Home':
          e.preventDefault();
          this.focusedIndex = 0;
          visibleItems[0]?.focus();
          break;

        case 'End':
          e.preventDefault();
          this.focusedIndex = visibleItems.length - 1;
          visibleItems[this.focusedIndex]?.focus();
          break;
      }
    }

    // Public methods
    setValue(value) {
      const item = Array.from(this.items).find(i => 
        i.dataset.value === value || i.textContent.trim() === value
      );
      if (item) {
        this.selectItem(item);
      }
    }

    getValue() {
      const active = this.element.querySelector('.active');
      return active ? (active.dataset.value || active.textContent.trim()) : null;
    }

    destroy() {
      this.element.classList.remove(CONFIG.openClass);
      // Remove event listeners would require storing references
    }
  }

  /**
   * Initialize all dropdowns
   */
  function initAllDropdowns() {
    document.querySelectorAll(CONFIG.dropdownSelector).forEach(el => {
      if (!el._flagDropdown) {
        el._flagDropdown = new FlagDropdown(el);
      }
    });
  }

  /**
   * Initialize a specific dropdown
   */
  function initDropdown(element, options) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element && !element._flagDropdown) {
      element._flagDropdown = new FlagDropdown(element, options);
    }
    return element?._flagDropdown;
  }

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllDropdowns);
  } else {
    initAllDropdowns();
  }

  // Expose to global scope
  window.FlagDropdown = FlagDropdown;
  window.initFlagDropdown = initDropdown;
  window.initAllFlagDropdowns = initAllDropdowns;

})();
