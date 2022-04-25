export { Alert } from './Alert/Alert';
export { Button } from './Button/Button';
export { Header } from './Header/Header';
export { Icon } from './Icon/Icon';
export { Modal } from './Modal/Modal';
export { Dropzone } from './Dropzone/Dropzone';
export { Form } from './Form/Form';
export { SideNav } from './SideNav/SideNav';
export { default as AuthForm } from './Form.js';
export { default as UploadForm } from './UploadForm.js';

export const titleMap = {
    "/": {
        title: "Bulk Tools",
        icon: "home"
    },
    "/bulk-manual-commission-credits": {
        title: "Bulk Manual Commission Credits",
        icon: "savings",
        description: "For making commission adjustments in bulk"
    },
    "/bulk-manual-order-credits": {
        title: "Bulk Manual Order Credits",
        icon: "shopping_bag",
        description: "For crediting a large number of existing orders to affiliates in bulk"
    },
    "/bulk-edit-affiliates": {
        title: "Bulk Edit Affiliates",
        icon: "create",
        description: "For bulk editing affiliates, takes all the same fields as the new affiliate API endpoint"
    },
    "/bulk-delete-triggers": {
        title: "Bulk Delete Triggers",
        icon: "emergency",
        description: "Only for the deletion of triggers en masse, for adding triggers please use the UI"
    },
    "/bulk-upload-orders": {
        title: "Bulk Upload Orders from CSV",
        icon: "file_present",
        description: "For adding new orders into the conversion queue in bulk. Orders will only convert if there's an existing trigger assigned to an affiliate or you use the auto_credit_affiliate_id property"
    }
}