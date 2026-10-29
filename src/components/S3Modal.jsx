import { useEffect, useRef } from 'react'
import './S3Modal.css'

const S3Modal = ({ show, onClose, triggerRef }) => {
  const modalRef = useRef(null)

  // Manage focus when modal opens/closes
  useEffect(() => {
    if (show) {
      // When modal opens, focus the close button after render
      const closeButton = modalRef.current?.querySelector('.s3-modal-close')
      if (closeButton) {
        closeButton.focus()
      }
    } else {
      // When modal closes, return focus to the trigger if available
      if (triggerRef.current) {
        triggerRef.current.focus()
      }
    }
  }, [show, triggerRef])

  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  if (!show) return null

  return (
    <div
      className="s3-modal-overlay"
      onClick={onClose}
      role="presentation" // Overlay is not interactive
    >
      <div
        className="s3-modal"
        ref={modalRef}
        onClick={handleModalClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="s3-modal-title"
      >
        <div className="s3-modal-header">
          <h2 id="s3-modal-title">About Amazon S3</h2>
          <button
            className="s3-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="s3-modal-content">
          <p>
            Amazon Simple Storage Service (Amazon S3) is an object storage service
            that offers industry-leading scalability, data availability, security,
            and performance. Customers of all sizes and industries can use Amazon S3
            to store and protect any amount of data for a range of use cases, such as
            data lakes, websites, mobile applications, backup and restore, archive,
            enterprise applications, IoT devices, and big data analytics.
          </p>
          <p>
            Amazon S3 provides management features so that you can optimize,
            organize, and configure access to your data to meet your specific
            business, organizational, and compliance requirements.
          </p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Industry-leading scalability and performance</li>
            <li>High durability and availability</li>
            <li>Multiple storage classes for cost optimization</li>
            <li>Strong read-after-write consistency</li>
            <li>Comprehensive security and access controls</li>
            <li>Data processing capabilities (Object Lambda, Event notifications)</li>
            <li>Storage management features (Lifecycle, Replication, Object Lock)</li>
          </ul>
          <p><strong>Common Use Cases:</strong></p>
          <ul>
            <li>Static website hosting</li>
            <li>Data backup and archiving</li>
            <li>Big data analytics</li>
            <li>Disaster recovery</li>
            <li>Cloud-native application data storage</li>
            <li>Media storage and distribution</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default S3Modal