export default function AccountSettings({ user }) {
  if (!user) {
    return <p>Please login or signup first.</p>;
  }

  return (
    <div>
      <h4>Account Settings</h4>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
        <img
          src="https://randomuser.me/api/portraits/women/75.jpg"
          alt="Profile"
          style={{ width: 60, height: 60, borderRadius: '50%' }}
        />
        <div style={{ marginLeft: 15 }}>
          <div style={{ fontWeight: 'bold' }}>{user.fullName || 'Marry Doe'}</div>
          <div style={{ fontSize: 12, color: '#555' }}>{user.email || 'Marry@Gmail.Com'}</div>
        </div>
        <button
          style={{
            backgroundColor: '#6c33ff',
            border: 'none',
            borderRadius: '50%',
            width: 24,
            height: 24,
            color: '#fff',
            fontSize: 14,
            marginLeft: 'auto',
            cursor: 'pointer'
          }}
          aria-label="Edit profile picture"
        >
          📷
        </button>
      </div>

      <p style={{
        marginTop: 20,
        borderTop: '1px dotted #ccc',
        paddingTop: 15,
        fontSize: 14,
        color: '#333'
      }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <hr style={{ marginTop: 100, border: '1px dotted #ccc' }} />
    </div>
  );
}