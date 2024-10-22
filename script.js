document.getElementById('leaveForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const leaveType = document.getElementById('leaveType').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reason = document.getElementById('reason').value;

    const leaveRequest = {
        name,
        leaveType,
        startDate,
        endDate,
        reason
    };

    try {
        const response = await fetch('/api/leaves', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leaveRequest)
        });

        if (response.ok) {
            document.getElementById('message').textContent = 'Leave request submitted successfully!';
            document.getElementById('leaveForm').reset(); // Reset form fields
        } else {
            throw new Error('Failed to submit leave request');
        }
    } catch (error) {
        document.getElementById('message').textContent = error.message;
    }
});