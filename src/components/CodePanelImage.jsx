/**
 * CodePanelImage
 * Renders the Docker command block as a crisp inline SVG "image".
 * Used in the Hero section as a visual asset.
 */
const CodePanelImage = ({ className = "" }) => (
  <svg
    viewBox="0 0 480 280"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="MTConnect agent Docker commands"
    className={`w-full rounded-2xl shadow-2xl block ${className}`}
  >
    {/* Background */}
    <rect width="480" height="280" rx="14" fill="#0F172A" />
    <rect width="480" height="280" rx="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

    {/* Active tab */}
    <rect x="24" y="24" width="64" height="24" rx="5" fill="rgba(255,255,255,0.12)" />
    <text x="56" y="40" fontFamily="monospace" fontSize="11" fontWeight="500" fill="white" textAnchor="middle" dominantBaseline="middle">
      Connect
    </text>
    {/* Inactive tab */}
    <text x="112" y="40" fontFamily="monospace" fontSize="11" fill="rgba(255,255,255,0.35)" dominantBaseline="middle">
      Query
    </text>

    {/* Divider */}
    <line x1="24" y1="60" x2="456" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

    {/* Comment 1 */}
    <text x="24" y="90" fontFamily="monospace" fontSize="12.5" fill="#475569">
      # Pull the MTConnect agent
    </text>
    {/* Command 1 */}
    <text x="24" y="114" fontFamily="monospace" fontSize="12.5" fill="#E2E8F0">
      docker pull{" "}
      <tspan fill="#38BDF8">mtconnect/agent</tspan>
    </text>

    {/* Comment 2 */}
    <text x="24" y="148" fontFamily="monospace" fontSize="12.5" fill="#475569">
      # Start with sample data
    </text>
    {/* Command 2 */}
    <text x="24" y="172" fontFamily="monospace" fontSize="12.5" fill="#E2E8F0">
      docker run{" "}
      <tspan fill="#38BDF8">-p 5000:5000</tspan>
      {" "}mtconnect/agent
    </text>

    {/* Comment 3 */}
    <text x="24" y="206" fontFamily="monospace" fontSize="12.5" fill="#475569">
      # Query the agent
    </text>
    {/* Command 3 */}
    <text x="24" y="230" fontFamily="monospace" fontSize="12.5">
      <tspan fill="#38BDF8">curl</tspan>
      <tspan fill="#E2E8F0"> http://localhost:</tspan>
      <tspan fill="#86EFAC">5000</tspan>
      <tspan fill="#E2E8F0">/current</tspan>
    </text>

    {/* Footer note */}
    <text x="24" y="258" fontFamily="monospace" fontSize="11" fill="#374151">
      ↓ Real response from a live MTConnect agent
    </text>
  </svg>
);

export default CodePanelImage;
