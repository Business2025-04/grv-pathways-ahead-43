
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

const ContactMessagesList = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages:', error);
        toast({
          title: "Error",
          description: "Failed to load messages. Please try again.",
          variant: "destructive"
        });
      } else {
        setMessages(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting message:', error);
        toast({
          title: "Error",
          description: "Failed to delete message. Please try again.",
          variant: "destructive"
        });
      } else {
        setMessages(messages.filter(message => message.id !== id));
        toast({
          title: "Deleted",
          description: "Message has been deleted successfully.",
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin h-8 w-8 border-4 border-grv-blue border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
      
      {messages.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-gray-500">No messages received yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {messages.map(message => (
            <Card key={message.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{message.name}</CardTitle>
                  <p className="text-sm text-gray-500">{formatDate(message.created_at)}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={() => handleDelete(message.id)}
                >
                  <Trash2 size={18} />
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-medium text-gray-500">Email:</h3>
                    <p>{message.email}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-500">Phone:</h3>
                    <p>{message.phone}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500 mb-2">Message:</h3>
                  <p className="whitespace-pre-wrap">{message.message}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactMessagesList;
