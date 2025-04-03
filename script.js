// Basic JavaScript file
console.log('Website loaded successfully!');

// Attendance functionality
document.addEventListener('DOMContentLoaded', function() {
    const markAttendanceBtn = document.getElementById('markAttendance');
    const resetAttendanceBtn = document.getElementById('resetAttendance');
    const attendanceHistory = document.getElementById('attendanceHistory');

    // Load attendance history from localStorage
    let attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

    // Function to update attendance display
    function updateAttendanceDisplay() {
        attendanceHistory.innerHTML = '';
        attendanceRecords.forEach(record => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${record.date}</span>
                <span>${record.time}</span>
            `;
            attendanceHistory.appendChild(li);
        });
    }

    // Function to mark attendance
    function markAttendance() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        
        attendanceRecords.unshift({ date, time });
        localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
        updateAttendanceDisplay();
    }

    // Function to reset attendance history
    function resetAttendance() {
        if (confirm('Are you sure you want to reset the attendance history? This action cannot be undone.')) {
            attendanceRecords = [];
            localStorage.removeItem('attendanceRecords');
            updateAttendanceDisplay();
        }
    }

    // Add event listeners
    markAttendanceBtn.addEventListener('click', markAttendance);
    resetAttendanceBtn.addEventListener('click', resetAttendance);

    // Initial display
    updateAttendanceDisplay();
}); 