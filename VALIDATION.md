# Validation and limitations

Checked: 11 November 2026. These results describe this public source snapshot only.

- npm test -- --watchAll=false --runInBand: 1 test passed. Fetch and chart components are mocked; this checks API URL handling and tick-size selection.
- npm run build: passed with existing lint warnings, including hook dependencies and unused variables.
- Compatible dependency updates applied. npm audit --omit=dev still reports 37 dependency entries (16 low, 8 moderate, 13 high; 0 critical). The legacy Create React App build/test toolchain is installed under dependencies and contributes these findings. This is not a clean dependency audit; migrate and revalidate the toolchain before deployment.
- No live market-data, browser visual regression or end-to-end integration validation was performed.

## Publication review

Private operational files and original history are excluded. Source was reviewed for credentials and direct contact information; the new public Git history is scanned with Gitleaks before publication. Narrow inline exemptions identify deterministic test fixtures and public contract addresses, not operational secrets. Automated checks are not a security audit and cannot guarantee the absence of vulnerabilities.
