import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function HighScoreDisplay({ visible, onClose }) {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    if (visible) {
      const scores = JSON.parse(localStorage.getItem('galagaHighScores') || '[]');
      setHighScores(scores);
    }
  }, [visible]);

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all high scores?')) {
      localStorage.removeItem('galagaHighScores');
      setHighScores([]);
    }
  };

  return (
    <Dialog
      visible={visible}
      onHide={onClose}
      header="High Scores"
      style={{ width: '90vw', maxWidth: '600px', zIndex: 10002 }}
      className="high-score-display-dialog"
      modal={true}
      blockScroll={true}
    >
      <div style={{ textAlign: 'center', color: '#00ffff' }}>
        {highScores.length === 0 ? (
          <p style={{ fontSize: '1.2rem', margin: '2rem 0' }}>
            No high scores yet. Play the game to set a record!
          </p>
        ) : (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <Button
                label="Clear Scores"
                onClick={handleClear}
                severity="danger"
                outlined
                size="small"
              />
            </div>
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #00ffff' }}>
                    <th style={{ padding: '0.75rem', color: '#00ffff', textAlign: 'left', fontSize: '1.1rem' }}>
                      Rank
                    </th>
                    <th style={{ padding: '0.75rem', color: '#00ffff', textAlign: 'left', fontSize: '1.1rem' }}>
                      Initials
                    </th>
                    <th style={{ padding: '0.75rem', color: '#00ffff', textAlign: 'right', fontSize: '1.1rem' }}>
                      Score
                    </th>
                    <th style={{ padding: '0.75rem', color: '#00ffff', textAlign: 'center', fontSize: '1.1rem' }}>
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {highScores.map((entry, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: '1px solid rgba(0, 255, 255, 0.2)',
                        backgroundColor:
                          index === 0
                            ? 'rgba(255, 215, 0, 0.2)'
                            : index === 1
                            ? 'rgba(192, 192, 192, 0.2)'
                            : index === 2
                            ? 'rgba(205, 127, 50, 0.2)'
                            : 'transparent'
                      }}
                    >
                      <td style={{ padding: '0.75rem', color: '#00ffff', fontSize: '1rem' }}>
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
                          color: index < 3 ? '#00ff00' : '#00ffff',
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }}
                      >
                        {entry.initials}
                      </td>
                      <td style={{ padding: '0.75rem', color: '#00ffff', textAlign: 'right', fontSize: '1rem' }}>
                        {entry.score.toLocaleString()}
                      </td>
                      <td style={{ padding: '0.75rem', color: '#00ffff', textAlign: 'center', fontSize: '0.9rem' }}>
                        {entry.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </Dialog>
  );
}

export default HighScoreDisplay;

