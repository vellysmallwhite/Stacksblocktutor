import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CreditCard, Shield } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const mockConnectWallet = (): Promise<{ address: string }> =>
  new Promise(resolve => 
    setTimeout(() => resolve({ address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' }), 1000)
  );

const PaymentPage: React.FC = () => {
  const [connected, setConnected] = useState<boolean>(false);

  const handleConnect = async () => {
    try {
      await mockConnectWallet();
      setConnected(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Crypto Payment</h2>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardTitle className="text-center text-indigo-600">Secure Blockchain Payment</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          {!connected ? (
            <div className="space-y-6">
              <p className="text-gray-600 text-center mb-6">
                Connect your wallet to make secure payments using cryptocurrency
              </p>
              <button 
                onClick={handleConnect}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <CreditCard className="mr-2" />
                Connect Wallet
              </button>
            </div>
          ) : (
            <Alert className="bg-green-50 border-green-200">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-600">Wallet Connected!</AlertTitle>
              <AlertDescription className="text-green-600">
                You can now make secure payments using cryptocurrency.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentPage;
