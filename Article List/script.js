const accountItem = document.querySelector('.account-item');
    const accountArea = document.getElementById('account-area-placeholder');
    const separatorPlaceholder = document.getElementById('account-separator-placeholder');
    const menuItems = document.querySelectorAll('.menu-item');

    const accountSeparatorHTML = `<div class="account-separator"></div>`;
    const accountSubmenuHTML = `
      <div class="account-submenu">
        <div class="menu-item">
          <div class="submenu-text" data-sub="profile">مشخصات فردی</div>
        </div>
        <div class="menu-item">
          <div class="submenu-text" data-sub="security">امنیت</div>
        </div>
        <div class="menu-item">
          <div class="submenu-text" data-sub="notifications">اعلان‌ها</div>
        </div>
        <div class="menu-item">
          <div class="submenu-text" data-sub="history">تاریخچه فعالیت</div>
        </div>
      </div>
    `;

    function clearAccountBlock() {
      separatorPlaceholder.innerHTML = '';
      accountArea.innerHTML = '';
      accountItem.classList.remove('active');
    }

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const isAccount = item.classList.contains('account-item');
        if (!isAccount) {
          clearAccountBlock();
        } else {
          if (accountArea.innerHTML.trim() === '') {
            separatorPlaceholder.innerHTML = accountSeparatorHTML; // خط بالا
            accountArea.innerHTML = accountSubmenuHTML; // زیرمنو پایینش
            accountItem.classList.add('active');
          } else {
            clearAccountBlock();
          }
        }
      });
    });