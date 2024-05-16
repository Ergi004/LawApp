import { Grid, Paper, Box, Typography } from '@mui/material'
import container from 'postcss/lib/container'
import React from 'react'
import { AllLawsProps, Law } from '@/app/models/lawModel'

const AllLaws: React.FC<AllLawsProps> = ({laws}) => {
  return (
      <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={13}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      minHeight: 240,
                    }}
                  >
                    {laws.map((law: Law) => (
                      <Box
                        key={law.law_id}
                        sx={{ margin: "10px", boxShadow: 2, padding: "20px" }}
                      >
                        <Typography variant="h5">{law.written_date}</Typography>
                        <Typography sx={{ textAlign: "center" }} variant="h5">
                          {law.law_name}
                        </Typography>
                        <Typography variant="h6">
                          {law.law_description}
                        </Typography>
                      </Box>
                    ))}
                  </Paper>
                </Grid>
              </Grid>
  )
}

export default AllLaws