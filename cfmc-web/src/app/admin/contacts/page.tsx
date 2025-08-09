import { getContactSubmissions } from "@/lib/supabase/actions/contact_submissions";
import {
  Box,
  VStack,
  Text,
  Badge,
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";

export default async function ContactsAdminPage() {
  const submissions = await getContactSubmissions();

  return (
    <Box p={6}>
      <Heading mb={6}>Contact Submissions</Heading>

      <VStack spacing={4} align="stretch">
        {submissions.map((submission) => (
          <Card key={submission.id}>
            <CardBody>
              <VStack align="stretch" spacing={3}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontWeight="bold">{submission.name}</Text>
                  <Badge
                    colorScheme={
                      submission.status === "new"
                        ? "blue"
                        : submission.status === "in_progress"
                        ? "orange"
                        : submission.status === "resolved"
                        ? "green"
                        : "red"
                    }
                  >
                    {submission.status}
                  </Badge>
                </Box>

                <Text color="gray.600">{submission.email}</Text>
                {submission.phone && (
                  <Text color="gray.600">{submission.phone}</Text>
                )}

                <Text fontSize="sm" color="gray.500">
                  Subject(s): {submission.subject.join(", ")}
                </Text>

                <Text>{submission.message}</Text>

                <Text fontSize="xs" color="gray.400">
                  Submitted: {new Date(submission.created_at).toLocaleString()}
                </Text>
              </VStack>
            </CardBody>
          </Card>
        ))}

        {submissions.length === 0 && (
          <Text color="gray.500" textAlign="center">
            No contact submissions yet.
          </Text>
        )}
      </VStack>
    </Box>
  );
}
