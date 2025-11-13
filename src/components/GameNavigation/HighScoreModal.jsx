import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function HighScoreModal({ visible, score, onClose, onSave }) {
  const [initials, setInitials] = useState('');
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    if (visible) {
      const scores = JSON.parse(localStorage.getItem('galagaHighScores') || '[]');
      setHighScores(scores);
    }
  }, [visible]);

  const handleSave = () => {
    if (initials.trim().length > 0 && initials.trim().length <= 3) {
      const scores = JSON.parse(localStorage.getItem('galagaHighScores') || '[]');
      const newScore = {
        initials: initials.trim().toUpperCase().substring(0, 3),
        score: score,
        date: new Date().toLocaleDateString()
      };
      scores.push(newScore);
      scores.sort((a, b) => b.score - a.score);
      const top10 = scores.slice(0, 10);
      localStorage.setItem('galagaHighScores', JSON.stringify(top10));
      onSave();
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <Dialog
      visible={visible}
      onHide={onClose}
      header="Game Over!"
      style={{ width: '90vw', maxWidth: '500px', zIndex: 10002 }}
      className="high-score-dialog"
      closable={false}
      modal={true}
      blockScroll={true}
    >
      <div style={{ textAlign: 'center', color: '#00ffff' }}>
        <h2 style={{ color: '#ff0000', marginBottom: '1rem', textShadow: '0 0 10px #ff0000' }}>
          YOU DIED
        </h2>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          Final Score: <span style={{ color: '#00ff00', fontWeight: 'bold' }}>{score.toLocaleString()}</span>
        </p>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="initials" style={{ display: 'block', marginBottom: '0.5rem', color: '#00ffff' }}>
            Enter Your Initials (Max 3):
          </label>
          <InputText
            id="initials"
            value={initials}
            onChange={(e) => setInitials(e.target.value.toUpperCase().substring(0, 3))}
            onKeyPress={handleKeyPress}
            maxLength={3}
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: '1.5rem',
              letterSpacing: '0.5rem',
              textTransform: 'uppercase',
              background: '#1a1a2e',
              border: '2px solid #00ffff',
              color: '#00ffff',
              padding: '0.5rem'
            }}
            autoFocus
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <Button
            label="Save Score"
            onClick={handleSave}
            disabled={initials.trim().length === 0}
            className="game-themed-button"
            style={{ marginRight: '0.5rem' }}
          />
          <Button
            label="Skip"
            onClick={onClose}
            severity="secondary"
            outlined
          />
        </div>

        {highScores.length > 0 && (
          <div style={{ marginTop: '2rem', borderTop: '2px solid #00ffff', paddingTop: '1rem' }}>
            <h3 style={{ color: '#00ff00', marginBottom: '1rem' }}>Top 10 High Scores</h3>
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #00ffff' }}>
                    <th style={{ padding: '0.5rem', color: '#00ffff', textAlign: 'left' }}>Rank</th>
                    <th style={{ padding: '0.5rem', color: '#00ffff', textAlign: 'left' }}>Initials</th>
                    <th style={{ padding: '0.5rem', color: '#00ffff', textAlign: 'right' }}>Score</th>
                    <th style={{ padding: '0.5rem', color: '#00ffff', textAlign: 'center' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {highScores.slice(0, 10).map((entry, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: '1px solid rgba(0, 255, 255, 0.2)',
                        backgroundColor: index < 3 ? 'rgba(0, 255, 0, 0.1)' : 'transparent'
                      }}
                    >
                      <td style={{ padding: '0.5rem', color: '#00ffff' }}>{index + 1}</td>
                      <td style={{ padding: '0.5rem', color: '#00ff00', fontWeight: 'bold' }}>{entry.initials}</td>
                      <td style={{ padding: '0.5rem', color: '#00ffff', textAlign: 'right' }}>
                        {entry.score.toLocaleString()}
                      </td>
                      <td style={{ padding: '0.5rem', color: '#00ffff', textAlign: 'center', fontSize: '0.9rem' }}>
                        {entry.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Dialog>
  );
}

export default HighScoreModal;

