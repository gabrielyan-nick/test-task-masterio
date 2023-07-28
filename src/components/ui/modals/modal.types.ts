export interface IModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export interface IModalTemplateProps extends IModalProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface IConfirmModalProps extends IModalProps {
  openSuccessModal: () => void;
  openCancelModal: () => void;
}
