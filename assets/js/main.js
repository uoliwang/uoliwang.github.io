// 友利科技 - 网站交互脚本

// 移动端菜单切换
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
  });

  // 点击导航链接后关闭菜单
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
    });
  });
}

// 联系表单处理
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !message) {
      alert('请填写完整的留言信息');
      return;
    }

    // 简单手机号验证（中国大陆）
    if (!/^1\d{10}$/.test(phone)) {
      alert('请输入正确的手机号码');
      return;
    }

    // 构造邮件链接（可替换为实际的后端接口）
    const subject = encodeURIComponent('友利科技网站留言 - ' + name);
    const body = encodeURIComponent('姓名：' + name + '\n电话：' + phone + '\n留言：' + message);
    window.location.href = 'mailto:info@uoli.net?subject=' + subject + '&body=' + body;

    alert('感谢您的留言！我们将尽快与您联系。');
    contactForm.reset();
  });
}

// 页面滚动时header添加阴影
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
    } else {
      header.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
    }
  }
});
