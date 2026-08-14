const API = 'http://127.0.0.1:5000';

// ============================================
// SET ACTIVE NAV LINK BASED ON CURRENT PAGE
// ============================================
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const href = btn.getAttribute('href');
        if(href === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ============================================
// LOAD ALERT BADGE COUNT (used on all pages)
// ============================================
async function loadAlertBadge() {
    try {
        const res = await fetch(`${API}/stats`);
        const data = await res.json();
        const badge = document.getElementById('alertBadge');
        if(badge) badge.textContent = data.new_alerts;
    } catch(e) {
        console.log('Badge error:', e);
    }
}

// ============================================
// HELPER - GET TAG CLASS
// ============================================
function getDecisionTag(decision) {
    const map = {
        'BLOCKED': 'tag-blocked',
        'FLAGGED': 'tag-flagged',
        'MONITORING': 'tag-monitoring',
        'APPROVED': 'tag-approved'
    };
    return map[decision] || 'tag-approved';
}

function getRiskTag(risk) {
    const map = {
        'CRITICAL': 'tag-critical',
        'HIGH': 'tag-high',
        'MEDIUM': 'tag-medium',
        'LOW': 'tag-low'
    };
    return map[risk] || 'tag-low';
}

// ============================================
// HELPER - GET ICON FOR TX TYPE
// ============================================
function getTxIcon(type) {
    const icons = {
        'UPI': '📱',
        'Credit Card': '💳',
        'Debit Card': '🏧',
        'Net Banking': '💻',
        'Wallet': '👛',
        'International': '🌍'
    };
    return icons[type] || '💰';
}

// Run on every page load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    loadAlertBadge();
    setInterval(loadAlertBadge, 10000);
});