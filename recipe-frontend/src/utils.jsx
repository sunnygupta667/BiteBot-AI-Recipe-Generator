import { toast } from 'react-toastify';

// Global Toast Settings to prevent redundancy
const toastOptions = {
    position: "bottom-right", // Default position
    autoClose: 5000,  // Auto close after 5 seconds
    hideProgressBar: false,  // Show progress bar
    newestOnTop: true,  // Newest toast shows at the top
    closeOnClick: true,  // Close on click
    rtl: false,  // Right-to-left direction, false is default
    pauseOnFocusLoss: true,  // Pause on window blur
    pauseOnHover: true,  // Pause on hover
};

export const handleSuccess = (msg) => {
    toast.success(msg, toastOptions);
}

export const handleError = (msg) => {
    toast.error(msg, toastOptions);
}
